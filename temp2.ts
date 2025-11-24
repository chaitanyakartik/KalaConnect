import database from "../lib/database";
import { ServicePayload } from "../controllers/webhook.controller";
import { Prisma } from "@prisma/client";
import axios from 'axios';

import { sendMessage, sendReplyButtons, sendListMessage, sendLocationRequest } from "../lib/wa-client";
import { getDistricts, getTaluksForDistrict } from "../data/locationData";
import { SESSION_STATES } from "../constants/session_states";
import { LOCATION_MESSAGES } from "../constants/messages";
import { start } from "repl";
import { TextToSpeechLongAudioSynthesizeClient } from "@google-cloud/text-to-speech";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const startLocationFlow = async (payload: ServicePayload): Promise<void> => {
  const { from, session } = payload;
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';

  const messageBody = LOCATION_MESSAGES.START_LOCATION_FLOW_PROMPT[lang];
  const buttons = [
    { id: 'provide_location_gps', title: LOCATION_MESSAGES.START_LOCATION_FLOW_USE_GPS_BUTTON[lang] },
    { id: 'provide_location_text', title: LOCATION_MESSAGES.START_LOCATION_FLOW_TYPE_ADDRESS_BUTTON[lang] },
    { id: 'provide_location_list', title: LOCATION_MESSAGES.START_LOCATION_FLOW_SELECT_LIST_BUTTON[lang] }
  ];

  await sendReplyButtons(session.provider, from, messageBody, buttons);
  await database.session.update({
    where: { id: session.id },
    data: { state: 'AWAITING_LOCATION_CHOICE' }
  });
};

export const handleLocationChoice = async (payload: ServicePayload): Promise<void> => {
  const { from, session, messageObject } = payload;
  const buttonId = messageObject.interactive?.button_reply?.id;
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';

  switch (buttonId) {
    case 'provide_location_gps':
      await database.session.update({
        where: { id: session.id },
        data: { state: SESSION_STATES.AWAITING_GPS_LOCATION }
      });
      await sendLocationRequest(session.provider,from, LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_GPS_PROMPT[lang]);
      break;

    case 'provide_location_text':
      await database.session.update({
        where: { id: session.id },
        data: { state: SESSION_STATES.AWAITING_MANUAL_ADDRESS }
      });
      await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_MANUAL_ADDRESS_PROMPT[lang]);
      break;

    case 'provide_location_list':
      const districts = await getDistricts(lang);
      console.log(`Districts fetched: ${districts.length} districts available for language: ${lang}`);
      
      // Send instructional message first
      await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_SELECT_DISTRICT_BODY[lang]);
      
      const sendListStatus = await sendChunkedList(
        session.provider,
        from,
        LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_SELECT_DISTRICT_TITLE[lang],
        LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_DISTRICTS_SECTION_TITLE[lang],
        districts,
        LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_DISTRICTS_SECTION_TITLE[lang]
      );
      
      if (!sendListStatus) {
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_DISTRICT_LIST_FAIL[lang]);
        return;
      }
      await database.session.update({
        where: { id: session.id },
        data: { state: SESSION_STATES.AWAITING_DISTRICT }
      });
      break;

    default:
      await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_INVALID_CHOICE[lang]);
      await startLocationFlow(payload); // Restart the flow
      break;
  }
};

export const handleManualAddress = async (payload: ServicePayload): Promise<void> => {
    const { from, session } = payload;
    const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';
    const address = payload.messageObject.text?.body;

    if (!address) {
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_MANUAL_ADDRESS_NO_ADDRESS_RECEIVED[lang]);
        return;
    }
    await processAndConfirmAddress(payload, address);
};

export const handleDistrictSelection = async (payload: ServicePayload): Promise<void> => {
  const { from, session, messageObject } = payload;
  const district = messageObject.interactive?.list_reply?.title;
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';

  if (!district) return; 

  const taluks = await getTaluksForDistrict(district, lang);

  await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_DISTRICT_SELECTION_SELECT_TALUK_BODY[lang]);
  
  const sendListStatus = await sendChunkedList(
    session.provider,
    from,
    LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_SELECT_DISTRICT_TITLE[lang],
    LOCATION_MESSAGES.HANDLE_LOCATION_CHOICE_TALUK_SECTION_TITLE[lang],
    taluks,
    LOCATION_MESSAGES.HANDLE_DISTRICT_SELECTION_TALUKS_SECTION_TITLE[lang]
  );
  
  if (!sendListStatus) {
    await sendMessage(session.provider, from, "Failed to send taluk list. Please try again.");
    return;
  }
  
  await database.session.update({
    where: { id: session.id },
    data: { 
      state: SESSION_STATES.AWAITING_TALUK,
      context: { partialAddress: { district } }
    }
  });
};

export const handleTalukSelection = async (payload: ServicePayload): Promise<void> => {
    const { from, session, messageObject } = payload;
    const taluk = messageObject.interactive?.list_reply?.title;
  const partialAddress = (session.context as any)?.partialAddress || {};
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';

    if (!taluk) return;

    await sendReplyButtons(session.provider, from, LOCATION_MESSAGES.HANDLE_TALUK_SELECTION_CONFIRMATION[lang](taluk), [{ id: 'not_available', title: LOCATION_MESSAGES.HANDLE_VILLAGE_SELECTION_NOT_AVAILABLE_BUTTON[lang] }]);
    
    await database.session.update({
        where: { id: session.id },
        data: {
            state: SESSION_STATES.AWAITING_VILLAGE,
            context: { partialAddress: { ...partialAddress, taluk } }
        }
    });
};

export const handleVillageSelection = async (payload: ServicePayload): Promise<void> => {
    const { from, session } = payload;
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';
  let village = "-";
  
  if (payload.messageObject.type === 'interactive') {
    // check if its reply button and id is 'not_available'
    const buttonId = payload.messageObject.interactive?.button_reply?.id;
    if (buttonId === 'not_available') {
      village = "";
    }
  }
  else if (payload.messageObject.type === 'text') {
    village = payload.messageObject.text?.body;
  }
  
    const partialAddress = (session.context as any)?.partialAddress || {};
    const { district, taluk } = partialAddress;
    

    if (!village || !district || !taluk) {
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_VILLAGE_SELECTION_ERROR[lang]);
        await startLocationFlow(payload);
        return;
    }

    const finalAddress = `${village}, ${taluk}, ${district}, Karnataka`;
    await processAndConfirmAddress(payload, finalAddress);
};


export const handleGpsLocation = async (payload: ServicePayload): Promise<void> => {
    const { latitude, longitude } = payload.messageObject.location;
    console.log(`📍 Received GPS. Calling external APIs for ${latitude},${longitude}...`);

    // Call both APIs concurrently
    const [address, regions] = await Promise.all([
        getAddressFromCoordinates(latitude, longitude),
        getCodesFromCoordinates(latitude, longitude)
    ]);

    let finalAddress = address?.formattedAddress || null;
    let postalCode = address?.postalCode || "";
      if (!finalAddress) {
        console.warn("Could not get address from Google Maps. Falling back to coordinates.");
        finalAddress = `Lat: ${latitude}, Long: ${longitude}`;
    }

    await askForLocationConfirmation(payload, finalAddress, postalCode, regions);
};

export const askForLocationConfirmation = async (
    payload: ServicePayload,
    address: string = "",
    postalCode: string = "",
    regions: {
        EN: Record<string, { code: string; name: string }>;
        KA: Record<string, { code: string; name: string }>;
    } | null = null
): Promise<void> => {
  const { from, session } = payload;
  let displayAddress = address;
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';

  if (!displayAddress || displayAddress.trim() === "" || displayAddress===null) {
    const languageSpecificRegions = regions?.[lang];

    if (languageSpecificRegions && Object.keys(languageSpecificRegions).length > 0) {
        const regionNames = [];
        
        if (languageSpecificRegions.village && languageSpecificRegions.village.name) {
            regionNames.push(languageSpecificRegions.village.name);
        }
        
        if (languageSpecificRegions.taluk && languageSpecificRegions.taluk.name) {
            regionNames.push(languageSpecificRegions.taluk.name);
        }
        
        if (languageSpecificRegions.district && languageSpecificRegions.district.name) {
            regionNames.push(languageSpecificRegions.district.name);
        }
        
        displayAddress = regionNames.join(", ");
        
        if (postalCode && postalCode.trim() !== "") {
            displayAddress += ` - ${postalCode}`;
        }
    } else {
        displayAddress = LOCATION_MESSAGES.ADDRESS_UNAVAILABLE[lang];
    }
  }

  if (displayAddress.trim() === LOCATION_MESSAGES.ADDRESS_UNAVAILABLE[lang]) {
    await sendMessage(session.provider, from, LOCATION_MESSAGES.LOCATION_FETCH_FAIL_PROMPT[lang]);
    await startLocationFlow(payload);
    return;
  }

    const messageBody = LOCATION_MESSAGES.CONFIRM_ADDRESS_PROMPT[lang](displayAddress);
    const buttons = [
        { id: 'confirm_location_yes', title: LOCATION_MESSAGES.CONFIRM_ADDRESS_YES_BUTTON[lang] },
        { id: 'confirm_location_no', title: LOCATION_MESSAGES.CONFIRM_ADDRESS_NO_BUTTON[lang] }
    ];

    await sendReplyButtons(session.provider, from, messageBody, buttons);

    await database.session.update({
        where: { id: session.id },
        data: {
            state: SESSION_STATES.AWAITING_LOCATION_CONFIRMATION,
            context: {
                ...(session.context as any),
                tempAddress: address,
                tempRegions: regions,
                postalCode: postalCode
            }
        }
    });
};

export const handleLocationConfirmation = async (payload: ServicePayload): Promise<void> => {
    const { from, session, messageObject } = payload;
    const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';
    const buttonId = messageObject.interactive?.button_reply?.id;
    const { tempAddress, tempRegions, postalCode } = (session.context as any) || {};

    if (!tempAddress && !tempRegions) {
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CONFIRMATION_ERROR[lang]);
        await startLocationFlow(payload);
        return;
    }

    if (buttonId === 'confirm_location_yes') {
        const finalAddressObject = {
            address_reformatted: tempAddress,
            regions: tempRegions || null,
            postal_code: postalCode || null
        };
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CONFIRMATION_SUCCESS[lang](session.name || ""));
        await database.session.update({
          where: { id: session.id },
          data: { 
              address: finalAddressObject, 
              state: SESSION_STATES.AWAITING_GRIEVANCE_FILING_CLASSIFICATION, 
              context: Prisma.JsonNull 
          }
        });
    } else if (buttonId === 'confirm_location_no') {
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CONFIRMATION_RETRY_PROMPT[lang]);
        await database.session.update({
            where: { id: session.id },
            data: { context: Prisma.JsonNull }
        });
        await startLocationFlow(payload);

    } else {
        await sendMessage(session.provider, from, LOCATION_MESSAGES.HANDLE_LOCATION_CONFIRMATION_INVALID_CHOICE[lang]);
    }
};

const getAddressFromCoordinates = async (lat: number, lon: number)
  : Promise<{ formattedAddress: string | null; postalCode: string | null } | null> => {

  const apiKey = process.env.Maps_API_KEY;
  if (!apiKey) {
    console.error("FATAL: Maps_API_KEY environment variable is not set.");
    return null;
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    // console.log('response.data:', response.data);
    if (response.data.status !== 'OK' || !response.data.results?.[0]) {
      console.warn("Google Maps API did not return a valid result for the coordinates.");
      return null;
    }

    const result = response.data.results[0];
    let neighborhood = '', sublocality2 = '', sublocality1 = '', city = '', postalCode = '';

    for (const component of result.address_components) {
      const types = component.types;      
      if (types.includes('neighborhood')) {
        neighborhood = component.long_name;
      } else if (types.includes('sublocality_level_2')) {
        sublocality2 = component.long_name;
      } else if (types.includes('sublocality_level_1')) {
        sublocality1 = component.long_name;
      } else if (types.includes('locality') && !types.includes('administrative_area_level_1') && 
                !types.includes('administrative_area_level_2') && 
                !types.includes('administrative_area_level_3')) {
        city = component.long_name;
      } else if (types.includes('postal_code')) {
        postalCode = component.short_name;
      }
    }
    const addressParts = [neighborhood, sublocality2, sublocality1, city, postalCode].filter(Boolean); 
    console.log("Parsed address parts:", addressParts.join(', ') || result.formatted_address || "");

    return {
      formattedAddress: addressParts.join(', ') || result.formatted_address || "",
      postalCode: postalCode
    };

  } catch (error) {
    console.error("Error during Google Maps API call:", error);
    return null;
  }
};

const getCodesFromCoordinates = async (
  lat: number,
  lon: number
): Promise<{
    EN: Record<string, { code: string; name: string }>;
    KA: Record<string, { code: string; name: string }>;
} | null> => {
  const url = 'https://nad.karnataka.gov.in/lat_log/api/GeoRegion/get-region-by-latlong';
  const payload = { latitude: lat, longitude: lon };

  console.log(`- Calling GeoRegion API for codes at ${lat},${lon}...`);

  try {
    const response = await axios.post(url, payload, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.data?.status_code !== '200' || !response.data?.data) {
      console.warn("GeoRegion API did not return a successful response.");
      return null;
    }

    const enRegions: Record<string, { code: string; name: string }> = {};
    const kaRegions: Record<string, { code: string; name: string }> = {};

    for (const region of response.data.data) {
      if (region.level && region.code && region.name) {
        const key = region.level.toLowerCase();
        enRegions[key] = { code: region.code, name: region.name };
        kaRegions[key] = { code: region.code, name: `${region.name} -- (TLKA)` };
      }
    }

    const finalRegions = {
        EN: enRegions,
        KA: kaRegions,
    };

    console.log(`- GeoRegion API successful. Bilingual regions created:`, finalRegions);
    return finalRegions;

  } catch (error: any) {
    console.error("❌ Error during GeoRegion API call:", error.response?.data || error.message);
    return null;
  }
};

const getCoordinatesFromAddress = async (address: string): Promise<{ latitude: number, longitude: number } | null> => {
  const apiKey = process.env.Maps_API_KEY;
  if (!apiKey) {
    console.error("FATAL: Maps_API_KEY environment variable is not set.");
    return null;
  }

  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  console.log(`- Calling Google Geocoding API to get coordinates for address: "${address}"`);

  try {
    const response = await axios.get(url);
    // console.log('response.data:', response.data);
    if (response.data.status !== 'OK' || !response.data.results?.[0]) {
      console.warn(`Google Geocoding API did not return a valid result for the address.`);
      return null;
    }

    const location = response.data.results[0].geometry.location;
    const coordinates = { latitude: location.lat, longitude: location.lng };
    
    console.log(`- Geocoding successful. Coordinates found:`, coordinates);
    return coordinates;

  } catch (error) {
    console.error("Error during Google Geocoding API call:", error);
    return null;
  }
};


const processAndConfirmAddress = async (
  payload: ServicePayload,
  address: string
): Promise<void> => {
  const { from, session } = payload;
  const coordinates = await getCoordinatesFromAddress(address);
  const lang = (session.languageChoice || 'EN') as 'EN' | 'KA';

  if (!coordinates) {
    await sendMessage(session.provider, from, LOCATION_MESSAGES.PROCESS_ADDRESS_COORDINATE_FAIL[lang]);
    return;
  }

  const [formattedAddress, regions] = await Promise.all([
      getAddressFromCoordinates(coordinates.latitude, coordinates.longitude),
      getCodesFromCoordinates(coordinates.latitude, coordinates.longitude)
  ]);

  const displayAddress = formattedAddress?.formattedAddress || address;
  const postalCode = formattedAddress?.postalCode || "";

  await askForLocationConfirmation(payload, displayAddress, postalCode, regions);
};

/**
 * Chunks an array into smaller arrays of specified size (max 10 for WhatsApp lists)
 */
const chunkArray = <T>(array: T[], chunkSize: number = 10): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

/**
 * Sends list items in batches of 10 (WhatsApp limitation)
 */
const sendChunkedList = async (
  provider: any,
  from: string,
  title: string,
  body: string,
  items: any[],
  sectionTitle: string
): Promise<boolean> => {
  const chunks = chunkArray(items, 10);
  
  for (let i = 0; i < chunks.length; i++) {
    const startNum = i * 10 + 1;
    const endNum = Math.min((i + 1) * 10, chunks[i].length) + startNum -1;
    const chunkTitle = chunks.length > 1 ? `${sectionTitle} ${startNum}-${endNum}` : sectionTitle;
    const chunkBody = chunks.length > 1 ? `${sectionTitle} ${startNum}-${endNum}` : sectionTitle;

    await delay(3000);

    const status = await sendListMessage(
      provider,
      from,
      title,
      chunkBody,
      [{ title: chunkTitle, rows: chunks[i] }]
    );
    
    if (!status) {
      return false;
    }
    
    // Add a small delay between messages to avoid rate limiting
    if (i < chunks.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return true;
};

