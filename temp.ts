// src/utils/messages.ts

export const MAIN_MENU_MESSAGES = {
  // Strings for getLanguageChoice function
  RESPOND_TO_THANK_YOU_PART_1: {
    EN:"Happy to help!",
    KA: `ಸಹಾಯ ಮಾಡಲು ಸಂತೋಷವಾಗಿದೆ!`,
  },
  HANDLE_MAIN_MENU_CHOICE_GENERAL_INFO_PROMPT: {
    EN: "This feature is not available yet. Please choose another option.",
    KA: `ಈ ವೈಶಿಷ್ಟ್ಯವು ಇನ್ನೂ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೊಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ.`,
  },
  RESPOND_TO_THANK_YOU_PART_2: {
    EN:"I hope I was able to assist you today. I would be thankful if you could share your feedback with me.",
    KA: `ನಿಮಗೆ ಇನ್ನಷ್ಟು ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ಅಥವಾ ಹೆಚ್ಚಿನ ಸಹಾಯ ಬೇಕಾದರೆ, ಕೇಳಲು ಮುಕ್ತವಾಗಿರಿ.`,
  },
  RESPOND_TO_THANK_YOU_POSITIVE_BUTTON: {
    EN: "👍",
    KA: "👍",
  },
  RESPOND_TO_THANK_YOU_NEGATIVE_BUTTON: {
    EN: "👎",
    KA: "👎",
  },
  HANDLE_FEEDBACK_TEXT_INVALID_OPTION_PROMPT: {
    EN: "Please enter text feedback",
    KA: `ದಯವಿಟ್ಟು ಪಠ್ಯ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನಮೂದಿಸಿ.`,
  },
  HANDLE_FEEDBACK_TEXT_ACKNOWLEDGEMENT: {
    EN: "Thank you for your feedback!",
    KA: `ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!`,
  },
  HANDLE_FEEDBACK_RESPONSE_INVALID_OPTION_PROMPT: {
    EN: "Please select one of the provided options.",
    KA: `ದಯವಿಟ್ಟು ಒದಗಿಸಲಾದ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆರಿಸಿ.`,
  },
  HANDLE_FEEDBACK_RESPONSE_POSITIVE_REPLY: {
    EN: "Thank you for the feedback! Please share any additional comments you may have.",
    KA: `ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಬಳಿ ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಕಾಮೆಂಟ್‌ಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.`,
  },
  HANDLE_FEEDBACK_RESPONSE_NEGATIVE_REPLY: {
    EN: "I'm sorry to hear that. Please provide your feedback to help us improve.",
    KA: `ನೀವು ಅದನ್ನು ಕೇಳಿ ವಿಷಾದಿಸುತ್ತೇನೆ. ದಯವಿಟ್ಟು ನಮ್ಮನ್ನು ಸುಧಾರಿಸಲು ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡಿ.`,
  },
  GET_LANGUAGE_CHOICE_PROMPT: {
    EN: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.\n\nPlease select your preferred language.",
    KA: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.\n\nPlease select your preferred language.",
  },
  GET_LANGUAGE_CHOICE_KANNADA_BUTTON: {
    EN: "ಕನ್ನಡ",
    KA: `ಕನ್ನಡ`,
  },
  GET_LANGUAGE_CHOICE_ENGLISH_BUTTON: {
    EN: "English",
    KA: `English`,
  },

  HANDLE_LANGUAGE_CHOICE_INVALID_OPTION_PROMPT: {
    EN: "Please select one of the provided options.",
    KA: `ದಯವಿಟ್ಟು ಒದಗಿಸಲಾದ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆರಿಸಿ.`,
  },

  HANDLE_LANGUAGE_CHOICE_GENERAL_INFO_BUTTON: {
    EN: "ℹ️ General Info",
    KA: `ℹ️ಸಾಮಾನ್ಯ ಮಾಹಿತಿ`,
  },

  // Strings for handleLanguageChoice function
  HANDLE_LANGUAGE_CHOICE_GREETING_REGISTERED: {
    EN: (name: string) => "Welcome to the Government of Karnataka’s AI-based Integrated Public Grievance Redressal System.\n\nYou can now submit your grievance through:\n\n📝 Text | 🎤 Audio | 🖼️ Image",
    KA: (name: string) => "ನಮಸ್ಕಾರ, ಕರ್ನಾಟಕ ಸರ್ಕಾರದ AI ಆಧಾರಿತ ಏಕೀಕೃತ ಸಾರ್ವಜನಿಕ ಕುಂದುಕೊರತೆ ನಿವಾರಣಾ ವ್ಯವಸ್ಥೆಗೆ ಸುಸ್ವಾಗತ.\n\nಈಗ, ನೀವು ನಿಮ್ಮ ಕುಂದುಕೊರತೆಯನ್ನು ಈ ಮೂಲಕ ಸಲ್ಲಿಸಬಹುದು:\n\n📝 ಪಠ್ಯ | 🎤 ಆಡಿಯೋ | 🖼️ ಚಿತ್ರ ",
  },
  HANDLE_LANGUAGE_CHOICE_MAIN_MENU_PROMPT: {
    EN: (name: string) => `Hi${name === "user" ? "" : ` ${name}`}, how can I help you today?`,
    KA: (name: string) => `ಹಾಯ್${name === "user" ? "" : ` ${name}`}, ಇಂದು ನಾನು ತಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?`,
  },
  HANDLE_LANGUAGE_CHOICE_FILE_GRIEVANCE_BUTTON: {
    EN: "📝 File a grievance",
    KA: `📝ಕುಂದುಕೊರತೆ ಸಲ್ಲಿಸಿ`,
  },
  HANDLE_LANGUAGE_CHOICE_CHECK_STATUS_BUTTON: {
    EN: "📋 Check status",
    KA: `📋ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ`,
  },
  HANDLE_LANGUAGE_CHOICE_ASK_REGISTER_NUMBER_PROMPT: {
    EN: (number: String)=>`Would you like to register grievance using same mobile number: ${number}`,
    KA: (number: String)=>`ಅದೇ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿಕೊಂಡು ನಿಮ್ಮ ಅಸಮಾಧಾನವನ್ನು ದಾಖಲಿಸಲು ನೀವು ಇಚ್ಛಿಸುತ್ತೀರಾ: ${number}`,
  },
  HANDLE_LANGUAGE_CHOICE_REGISTER_THIS_NUMBER_BUTTON: {
    EN: "📱 This number",
    KA: `📱 ಈ ಸಂಖ್ಯೆ`,
  },
  HANDLE_LANGUAGE_CHOICE_REGISTER_DIFFERENT_NUMBER_BUTTON: {
    EN: "🔄 Different number",
    KA: `🔄 ವಿಭಿನ್ನ ಸಂಖ್ಯೆ`,
  },

  // Strings for handleMainMenuChoice function
  HANDLE_MAIN_MENU_CHOICE_PROMPT_FOR_GRIEVANCE_ID: {
    EN: "📋 Please enter grievance ID",
    KA: `📋 ಮುಂದುವರಿಯಲು ದೂರು ಐಡಿ ನಮೂದಿಸಿ.`,
  },
  HANDLE_MAIN_MENU_CHOICE_NOT_REGISTERED_PROMPT: {
    EN: "Please register your mobile number with us.",
    KA: `ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮ್ಮೊಂದಿಗೆ ನೋಂದಾಯಿಸಿ.`,
  },
  
  // Strings for handleAwaitingNumberChoiceGrievanceFiling function
  HANDLE_AWAITING_NUMBER_CHOICE_GRIEVANCE_FILING_PROMPT: {
    EN: (number: string)=> `Please register your mobile number with us.\n\nWould you like to register your grievance with: ${number}`,
    KA: (number: string)=>`ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮ್ಮೊಂದಿಗೆ ನೋಂದಾಯಿಸಿ.\n ನಿಮ್ಮ ಕುಂದುಕೊರತೆಗಳನ್ನು ನೀವು ಸಂಖ್ಯೆಯಿಂದ ನೋಂದಾಯಿಸಲು ಬಯಸುವಿರಾ: ${number}`,
  },
  HANDLE_AWAITING_NUMBER_CHOICE_GRIEVANCE_FILING_ALREADY_REGISTERED_PROMPT: {
    EN: (number: string) => `Would you like to register your grievance with: ${number}`,
    KA: (number: string) => `ನೀವು ನಿಮ್ಮ ಪ್ರಸ್ತುತ WhatsApp ಸಂಖ್ಯೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತೀರಾ ಅಥವಾ ಬೇರೆ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸುತ್ತೀರಾ?\n ಇದು ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸಂಖ್ಯೆ: ${number}`,
  },
  HANDLE_AWAITING_NUMBER_CHOICE_GRIEVANCE_FILING_CURRENT_NUMBER_BUTTON: {
    EN: "📱 This number",
    KA: `📱 ಈ ಸಂಖ್ಯೆ`,
  },
  HANDLE_AWAITING_NUMBER_CHOICE_GRIEVANCE_FILING_DIFFERENT_NUMBER_BUTTON: {
    EN: "🔄 Different number",
    KA: `🔄 ವಿಭಿನ್ನ ಸಂಖ್ಯೆ`,
  },

  // Strings for handleNumberDecisionGrievanceFiling function
  HANDLE_NUMBER_DECISION_GRIEVANCE_FILING_INVALID_OPTION_PROMPT: {
    EN: "Please select one of the provided options.",
    KA: `ದಯವಿಟ್ಟು ಒದಗಿಸಲಾದ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆರಿಸಿ.`,
  },
  HANDLE_NUMBER_DECISION_GRIEVANCE_FILING_CONFIRM_CURRENT_NUMBER: {
    EN: "Great! We'll use your current WhatsApp number for this grievance.",
    KA: `ಚೆನ್ನಾಗಿದೆ! ಈ ದೂರಿಗೆ ನಿಮ್ಮ ಪ್ರಸ್ತುತ WhatsApp ಸಂಖ್ಯೆಯನ್ನು ಬಳಸುತ್ತೇವೆ.`,
  },
  HANDLE_NUMBER_DECISION_GRIEVANCE_FILING_PROMPT_FOR_ALTERNATIVE_NUMBER: {
    EN: "Please enter the mobile number with which you would like to register your grievance.",
    KA: `ನೀವು ಬಳಸಬೇಕಾದ 10-ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.`,
  },
  HANDLE_NUMBER_DECISION_GRIEVANCE_FILING_UNHANDLED_CHOICE_PROMPT: {
    EN: "I didn't understand your choice. Let's try again.",
    KA: `ನಿಮ್ಮ ಆಯ್ಕೆ ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ಇನ್ನೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸೋಣ.`,
  },
};


// src/utils/location-messages.ts

export const LOCATION_MESSAGES = {
  // Strings for startLocationFlow
  START_LOCATION_FLOW_PROMPT: {
    EN: "To proceed, Kindly choose a method to provide your location.",
    KA: "ಮುಂದುವರಿಯಲು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಒದಗಿಸುವ ಒಂದು ವಿಧಾನವನ್ನು ಆರಿಸಿಕೊಳ್ಳಿ.",
  },
  HANDLE_VILLAGE_SELECTION_NOT_AVAILABLE_BUTTON: {
    EN: "Not Available",
    KA: `ಲಭ್ಯವಿಲ್ಲ`,
  },
  START_LOCATION_FLOW_USE_GPS_BUTTON: {
    EN: "📍 Current location",
    KA: `📍 ಪ್ರಸ್ತುತ ಸ್ಥಳ`,
  },
  START_LOCATION_FLOW_TYPE_ADDRESS_BUTTON: {
    EN: "🏠 Enter Address",
    KA: `🏠 ವಿಳಾಸ ಬರೆಯಿರಿ`, // 14 characters
  },
  START_LOCATION_FLOW_SELECT_LIST_BUTTON: {
    EN: "📝 Choose from list",
    KA: `📝 ಪಟ್ಟಿಯಿಂದ ಆಯ್ಕೆ`, // 16 characters
  },

  // Strings for handleLocationChoice
  HANDLE_LOCATION_CHOICE_GPS_PROMPT: {
    EN: "Please share your current location",
    KA: `ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಕೆಳಗಿನ ಗುಂಡಿಯನ್ನು ಒತ್ತಿರಿ.`,
  },
  HANDLE_LOCATION_CHOICE_MANUAL_ADDRESS_PROMPT: {
    EN: "Please type and send your full address.",
    KA: `ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಂಪೂರ್ಣ ವಿಳಾಸವನ್ನು ಟೈಪ್ ಮಾಡಿ ಮತ್ತು ಕಳುಹಿಸಿ.`,
  },
  HANDLE_LOCATION_CHOICE_SELECT_DISTRICT_TITLE: {
    EN: "Select Location",
    KA: `ಸ್ಥಳ ಆಯ್ಕೆ ಮಾಡಿ`,
  },
  HANDLE_LOCATION_CHOICE_TALUK_SECTION_TITLE: {
    EN: "Taluks",
    KA: `ತಾಲ್ಲೂಕುಗಳು`,
  },
  HANDLE_LOCATION_CHOICE_SELECT_DISTRICT_BODY: {
    EN: "Step 1: Select Your District",
    KA: `ಹಂತ 1: ನಿಮ್ಮ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.`,
  },
  HANDLE_LOCATION_CHOICE_DISTRICTS_SECTION_TITLE_RANGE: {
    EN: (start: number, end: number) => `Districts ${start}-${end}`,
    KA: (start: number, end: number) => `ಜಿಲ್ಲೆಗಳು ${start}-${end}`,
  },
  HANDLE_LOCATION_CHOICE_DISTRICTS_SECTION_TITLE: {
    EN: "Districts",
    KA: `ಜಿಲ್ಲೆಗಳು`,
  },
  HANDLE_LOCATION_CHOICE_DISTRICT_LIST_FAIL: {
    EN: "Failed to send the district list. Please try again later.",
    KA: `ಜಿಲ್ಲಾ ಪಟ್ಟಿಯನ್ನು ಕಳುಹಿಸಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  HANDLE_LOCATION_CHOICE_INVALID_CHOICE: {
    EN: "That wasn't a valid choice. Please select one of the provided buttons.",
    KA: `ಅದು ಸರಿಯಾದ ಆಯ್ಕೆ ಅಲ್ಲ. ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  
  // Strings for handleManualAddress
  HANDLE_MANUAL_ADDRESS_NO_ADDRESS_RECEIVED: {
    EN: "I didn't receive an address. Please type and send your full address.",
    KA: `ನನಗೆ ವಿಳಾಸ ಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಂಪೂರ್ಣ ವಿಳಾಸವನ್ನು ಟೈಪ್ ಮಾಡಿ ಕಳುಹಿಸಿ.`,
  },

  // Strings for handleDistrictSelection
  HANDLE_DISTRICT_SELECTION_SELECT_TALUK_BODY: {
    EN: "Step 2: Select Your Taluk",
    KA: `ಹಂತ 2: ನಿಮ್ಮ ತಾಳೂಕನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.`,
  },
  HANDLE_DISTRICT_SELECTION_TALUKS_SECTION_TITLE: {
    EN: "Taluks",
    KA: `ತಾಲ್ಲೂಕುಗಳು`,
  },

  // Strings for handleTalukSelection
  HANDLE_TALUK_SELECTION_CONFIRMATION: {
    EN: (taluk: string) => `✅ Taluk set to: ${taluk}.\n\nPlease type and send the name of your village.`,
    KA: (taluk: string) => `✅ ತಾಲೂಕನ್ನು ಇದಕ್ಕೆ ಹೊಂದಿಸಲಾಗಿದೆ: ${taluk}.\n\nದಯವಿಟ್ಟು ನಿಮ್ಮ ಗ್ರಾಮದ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ ಕಳುಹಿಸಿ.`
  },

  // Strings for handleVillageSelection
  HANDLE_VILLAGE_SELECTION_ERROR: {
    EN: "Something went wrong. Let's start over.",
    KA: `ಏನೋ ತಪ್ಪಾಗಿದೆ. ಮತ್ತೆ ಪ್ರಾರಂಭಿಸೋಣ.`,
  },
  
  // Strings for askForLocationConfirmation
  ADDRESS_UNAVAILABLE: {
    EN: "Unavailable",
    KA: `ಲಭ್ಯವಿಲ್ಲದ`,
  },
  LOCATION_FETCH_FAIL_PROMPT: {
      EN: "Sorry, we couldn't fetch location details. Let's try getting your location again.",
    KA: `ಕ್ಷಮಿಸಿ, ಸ್ಥಳದ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಮತ್ತೊಮ್ಮೆ ಪಡೆಯಲು ಪ್ರಯತ್ನಿಸೋಣ.`,
  },
  CONFIRM_ADDRESS_PROMPT: {
    EN: (address: string) => `Please confirm if you would like to file grievance for the below address. \n\n*📍 ${address}*`,
    KA: (address: string) => `ನೀವು ಕೆಳಗಿನ ವಿಳಾಸಕ್ಕೆ ದೂರು ಸಲ್ಲಿಸಲು ಬಯಸುತ್ತೀರ ಎಂದು ದಯವಿಟ್ಟು ದೃಢೀಕರಿಸಿ. \n\n*${address}*`
  },
  CONFIRM_ADDRESS_YES_BUTTON: {
    EN: "✅ Yes, correct",
    KA: `✅ ಹೌದು, ಸರಿ.`,
  },
  CONFIRM_ADDRESS_NO_BUTTON: {
    EN: "❌ No, try again",
        "KA": "❌ ಇಲ್ಲ, ಮತ್ತೆ ಮಾಡಿ.",
  },

  // Strings for handleLocationConfirmation
  HANDLE_LOCATION_CONFIRMATION_ERROR: {
    EN: "Sorry, something went wrong. Let's restart the location process.",
    KA: `ಕ್ಷಮಿಸಿ, ಏನಾದರೂ ಸಮಸ್ಯೆ ಆಯಿತು. ಸ್ಥಳ ಗುರುತಿಸುವಿಕೆಯ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪುನಃ ಆರಂಭಿಸೋಣ.`,
  },
  HANDLE_LOCATION_CONFIRMATION_SUCCESS: {
    EN: (name: string) => `✅ Great! Your location has been confirmed.\n\nPlease describe your issue in detail to help us understand better.\n\nYou may also upload supporting documents (PDF, PNG, or JPG formats only). The total size of all files combined should not exceed 30 MB`,
    KA: (name: string) => `✅ ಉತ್ತಮ! ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ದೃಢೀಕರಿಸಲಾಗಿದೆ.\n\nನಾವು ತಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಉತ್ತಮವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ದಯವಿಟ್ಟು ತಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ವಿವರವಾಗಿ ವಿವರಿಸಿ.\n\nನೀವು ನಿಮ್ಮ ಸಮಸ್ಯೆಗೆ ಸಂಬಂಧಿಸಿದ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಬಹುದು (PDF, PNG, ಅಥವಾ JPG ಸ್ವರೂಪಗಳು ಮಾತ್ರ). ಎಲ್ಲಾ ಫೈಲ್‌ಗಳ ಒಟ್ಟು ಗಾತ್ರವು 30 MB ಮೀರಬಾರದು`,
  },

  HANDLE_LOCATION_CONFIRMATION_RETRY_PROMPT: {
    EN: "Sorry about that. Let's try getting your location again.",
    KA: `ಕ್ಷಮಿಸಿ, ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಮತ್ತೊಮ್ಮೆ ಪರಿಶೀಲಿಸೋಣ.`,
  },
  HANDLE_LOCATION_CONFIRMATION_INVALID_CHOICE: {
    EN: "Please use the 'Yes' or 'No' buttons to confirm the address.",
    KA: `ವಿಳಾಸವನ್ನು ದೃಢೀಕರಿಸಲು ದಯವಿಟ್ಟು 'ಹೌದು' ಅಥವಾ 'ಇಲ್ಲ' ಗುಂಡಿಗಳನ್ನು ಬಳಸಿ.`,
  },

  // Strings for processAndConfirmAddress
  PROCESS_ADDRESS_COORDINATE_FAIL: {
    EN: "Sorry, I couldn't find that address. We may be facing an issue. Please try again.",
    KA: `ಕ್ಷಮಿಸಿ, ಆ ವಿಳಾಸವು ದೊರೆತಿಲ್ಲ. ನಮಗೆ ಸಮಸ್ಯೆ ಇರಬಹುದು. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.`,
  }
};

// src/utils/registration-messages.ts

export const REGISTRATION_MESSAGES = {
  // Strings for handleAwaitingNumberChoiceRegistration
  CONFIRM_CURRENT_NUMBER_PROMPT: {
    EN: "Thank you for the Confirmation!",
    KA: `ದೃಢೀಕರಣಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು!!`,
  },
  PROMPT_FOR_ALTERNATIVE_NUMBER: {
    EN: "Please Enter mobile number with which you would like to register the grievance",
    KA: `ನೀವು ದೂರನ್ನು ದಾಖಲಿಸಲು ಬಯಸುವ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.`,
  },
  INVALID_CHOICE_PROMPT: {
    EN: "I didn't understand your choice. Let's try again.",
    KA: `ನಿಮ್ಮ ಆಯ್ಕೆ ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ಇನ್ನೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸೋಣ.`,
  },

  // Strings for handleAlternativeNumber
  INVALID_NUMBER_PROMPT: {
    EN: "Please send a valid 10-digit mobile number.",
    KA: `ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಕಳುಹಿಸಿ.`,
  },
  INVALID_NUMBER_FORMAT_ERROR: {
    EN: "The number you entered doesn't appear to be valid. Please send a 10-digit mobile number.",
    KA: `ನೀವು ನಮೂದಿಸಿರುವ ಸಂಖ್ಯೆ ಮಾನ್ಯವಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಕಳುಹಿಸಿ.`,
  },

  // Strings for handleNameRegistration
  INVALID_NAME_PROMPT: {
    EN: "Please enter a valid name (at least 3 characters).",
    KA: `ದಯವಿಟ್ಟು ವ್ಯಾಲಿಡ್ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (ಕನಿಷ್ಠ 3 ಅಕ್ಷರಗಳು).`,
  },
  NAME_REGISTRATION_SUCCESS: {
    EN: (name: string) => `Great, ${name}! Your registration is now confirmed.`,
    KA: (name: string) => `ಉತ್ತಮ, ${name}! ನಿಮ್ಮ ನೋಂದಣಿ ಪೂರ್ಣಗೊಂಡಿದೆ.`  },

  // Strings for handleMainMenuChoiceFreshRegistration
  PROMPT_FOR_GRIEVANCE_ID: {
    EN: "📋 Please enter grievance ID to continue",
    KA: `📋 ಮುಂದುವರಿಯಲು ದೂರು ಐಡಿ ನಮೂದಿಸಿ.`,
  },
  START_GRIEVANCE_FILING_PROMPT: {
    EN: "Alright, let's start filing your grievance. Please share the problem you are facing.",
    KA: `ಶುಭ, ನಿಮ್ಮ ಕುಂದುಕೊರತೆಗಳ ದಾಖಲಾತಿಯನ್ನು ಪ್ರಾರಂಭಿಸೋಣ. ನೀವು ಎದುರಿಸುತ್ತಿರುವ ಸಮಸ್ಯೆಯನ್ನು ದಯವಿಟ್ಟು ತಿಳಿಸಿ.`,
  },

  // Strings for OTP Flow
  OTP_PROMPT: {
    EN: "I have sent a 4 digit OTP to your Whatsapp number. Please enter it below for verification.",
    KA: `ನಾನು ನಿಮ್ಮ Whatsapp ಸಂಖ್ಯೆಗೆ 4 ಅಂಕಿಯ OTP ಕಳುಹಿಸಿದ್ದೇನೆ. ಪರಿಶೀಲನೆಗಾಗಿ ದಯವಿಟ್ಟು OTPಯನ್ನು ಕೆಳಗೆ ನಮೂದಿಸಿ.`,
  },
  RESEND_OTP_BUTTON: {
    EN: "Resend OTP",
    KA: `OTP ಯನ್ನು ಮರುಕಳುಹಿಸಿ`,
  },
  OTP_SEND_FAIL_ERROR: {
    EN: "Sorry, I couldn't send an OTP right now. Please try again later.",
    KA: `ಕ್ಷಮಿಸಿ, ನಾನು ಈಗ OTP ಕಳುಹಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  INVALID_OTP_PROMPT: {
    EN: "Please enter a valid 4-digit OTP.",
    KA: `ದಯವಿಟ್ಟು ವ್ಯಾಲಿಡ್ 4-ಅಂಕಿಯ OTP ಅನ್ನು ನಮೂದಿಸಿ.`,
  },
  OTP_VERIFICATION_SUCCESS: {
    EN: "✅ Verification successful!",
    KA: `✅ ಪರಿಶೀಲನೆ ಯಶಸ್ವಿಯಾಯಿತು.`,
  },
  PROMPT_FOR_FULL_NAME: {
    EN: "Please enter your name as per Aadhaar.",
    KA: `ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಧಾರ್ ಕಾರ್ಡ್ ಪ್ರಕಾರ ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.`,
  },
  OTP_INCORRECT_PROMPT: {
    EN: "The OTP you have entered is incorrect. Please try again.",
    KA: `ನೀವು ನಮೂದಿಸಿದ OTP ತಪ್ಪಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  RESEND_OTP_SUCCESS: {
    EN: "I've sent a new OTP to your number.",
    KA: `ನಿಮ್ಮ ಸಂಖ್ಯೆಗೆ ಹೊಸ OTP ಕಳುಹಿಸಲಾಗಿದೆ.`,
  },
  RESEND_OTP_FAIL_ERROR: {
    EN: "Sorry, I couldn't resend the OTP right now. Please try again in a moment.",
    KA: `ಕ್ಷಮಿಸಿ, OTP ಅನ್ನು ಈಗಲೇ ಮರುಪ್ರಸಾರ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಹೊತ್ತಿನ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.`,
  },
};

// src/utils/grievance-status-messages.ts

export const GRIEVANCE_STATUS_MESSAGES = {
  // Strings for handleGrievanceStatusFlow
  PROMPT_FOR_ID: {
    EN: "Please enter your grievance ID.",
    KA: `ನಿಮ್ಮ ಕುಂದುಕೊರತೆ ID ಅನ್ನು ನಮೂದಿಸಿ.`,
  },

  // Strings for handleGrievanceStatusId
  INVALID_ID_FORMAT: {
    EN: "That doesn't seem to be a valid ID. Please enter a numeric grievance ID.",
    KA: `ಅದು ವ್ಯಾಲಿಡ್ ಐಡಿ ಅಲ್ಲ. ದಯವಿಟ್ಟು ಅಂಕೀಯ ದೂರು ಐಡಿ ನಮೂದಿಸಿ.`,
  },
  STATUS_SUCCESS_MESSAGE: {
    EN: (grievanceId: string, status: string) => `The status of your grievance is: \n*${status}*`,
    KA: (grievanceId: string, status: string) => `ನಿಮ್ಮ ಕುಂದುಕೊರತೆ ಅರ್ಜಿಯ ಸ್ಥಿತಿ: \n*${status}*`
  },
  CLOSING_MESSAGE: {
    EN: "Thank you for using the iPGRS service. Is there anything else I can help you with today?",
    KA: `ಐಪಿಜಿಆರ್ಎಸ್ ಸೇವೆಯನ್ನು ಬಳಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ಇಂದು ನಾನು ನಿಮಗೆ ಇನ್ನೇನಾದರೂ ಸಹಾಯ ಮಾಡಬಹುದೇ?`,
  },
  API_ERROR_MESSAGE: {
    EN: "Sorry, I couldn't retrieve the status for that ID. Please double-check the ID and try again.",
    KA: `ಕ್ಷಮಿಸಿ, ಆ ID ಗೆ ಸ್ಥಿತಿಯನ್ನು ಪುನಃ ಪಡೆದುಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಆ ID ಅನ್ನು ಎರಡು ಬಾರಿ ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  PROMPT_FOR_ANOTHER: {
    EN: "Would you like to check the status of another grievance ID?",
    KA: `ನೀವು ಇನ್ನೊಂದು ಕುಂದುಕೊರತೆ ಅರ್ಜಿಯ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ಬಯಸುವಿರಾ?`,
    },
  FINAL_CLOSING_MESSAGE: {
    EN: "Thank you for using AI-based Integrated Public Grievance Redressal System.",
    KA: `AI ಆಧಾರಿತ ಏಕೀಕೃತ ಸಾರ್ವಜನಿಕ ಕುಂದುಕೊರತೆ ನಿವಾರಣಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಬಳಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.`,
  },
  INVALID_CHOICE: {
    EN: "I didn't understand your choice. Please respond with 'Yes' or 'No'.",
    KA: `ನಿಮ್ಮ ಆಯ್ಕೆ ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು 'ಹೌದು' ಅಥವಾ 'ಇಲ್ಲ' ಎಂದು ಪ್ರತಿಕ್ರಿಯಿಸಿ.`,
  }
};

// src/utils/grievance-filing-messages.ts

export const GRIEVANCE_FILING_MESSAGES = {
  // Strings for processAndScheduleGrievance function
  PROCESS_GRIEVANCE_UNSUPPORTED_TYPE: {
    EN: "Sorry, I can only process text, image, PDF or audio messages for your grievance description. Please try again.",
    KA: `ಕ್ಷಮಿಸಿ, ನಿಮ್ಮ ದೂರಿನ ವಿವರಣೆಗಾಗಿ ನಾನು ಪಠ್ಯ, ಚಿತ್ರ ಅಥವಾ ಆಡಿಯೋ ಸಂದೇಶಗಳನ್ನು ಮಾತ್ರ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಬಲ್ಲೆ. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  PROCESS_GRIEVANCE_ERROR: {
    EN: "Sorry, there was an error processing your message. Please try again.",
    KA: `ಕ್ಷಮಿಸಿ, ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಲ್ಲಿ ದೋಷ ಉಂಟಾಯಿತು. ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  SUMMARY_CONFIRMATION_PLEASE_WAIT_MESSAGE: {
    EN: "Kindly wait while I'm processing your request",
    KA: `ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ನಾನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತಿರುವಾಗ ದಯವಿಟ್ಟು ಕಾಯಿರಿ.`,
  },

  // Strings for handleChooseOfficer function
  CHOOSE_OFFICER_SELECTION_ERROR: {
    EN: "An error occurred with your selection. Please try again.",
    KA: `ನಿಮ್ಮ ಆಯ್ಕೆಯಲ್ಲಿ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  CHOOSE_OFFICER_CONFIRMATION: {
    EN: (title: string) => `You have selected: *${title}*`,
    KA: (title: string) => `You have selected: *${title}* -- (TLKA)`,
  },
  ENTER_NUMBER_PROMPT_FOR_GSC: {
    EN: "Please enter your GSC NO",
    KA: `ದಯವಿಟ್ಟು ನಿಮ್ಮ GSC ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.`,
  },
  ENTER_NUMBER_PROMPT_FOR_GSC_NOT_AVAILABLE_BUTTON: {
    EN: "Not Available",
    KA: `ಲಭ್ಯವಿಲ್ಲ`,
  },
  ENTER_PROMPT_FOR_DECLARATION: {
    EN: "Thank you. Finally, please review and accept the declaration.",
    KA: `ಧನ್ಯವಾದಗಳು. ಅಂತಿಮವಾಗಿ, ದಯವಿಟ್ಟು ಘೋಷಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸ್ವೀಕರಿಸಿ.`,
  },  
  CLASSIFICATION_CONFIRMATION_RECEIVED_TEXT: {
    EN: "Please click one of those buttons to continue.",
    KA: `ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಈ ಬಟನ್‌ಗಳಲ್ಲಿ ಒಂದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.`,
  },
  // Strings for sendOfficerList helper
  SEND_OFFICER_LIST_TITLE: {
    EN: "Select an Officer",
    KA: `ಒಬ್ಬ ಅಧಿಕಾರಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.`,
  },
  SEND_OFFICER_LIST_BODY: {
    EN: "Please choose the officer to direct your grievance to.",
    KA: `ನಿಮ್ಮ ದೂರನ್ನು ಯಾವ ಅಧಿಕಾರಿಗೆ ನಿರ್ದೇಶಿಸಬೇಕೆಂದು ದಯವಿಟ್ಟು ತಿಳಿಸಿ.`,
  },
  SEND_OFFICER_LIST_SECTION_TITLE: {
    EN: "Available Officers",
    KA: `ಲಭ್ಯವಿರುವ ಅಧಿಕಾರಿಗಳು`,
  },

  // Strings for handleEnterGSCNumber function
  ENTER_GSC_NUMBER_CONFIRMED: {
    EN: (gscNumber: string) => `✅ GSC Number confirmed: *${gscNumber}*`,
    KA: (gscNumber: string) => `✅ GSC Number confirmed: *${gscNumber}* -- (TLKA)`,
  },
  ENTER_GSC_NUMBER_PROMPT_FOR_SSP_ID: {
    EN: "Please enter your SSP ID.",
    KA: `ದಯವಿಟ್ಟು ನಿಮ್ಮ SSP IDಯನ್ನು ನಮೂದಿಸಿ.`,
  },
  ENTER_GSC_NUMBER_INVALID: {
    EN: "The GSC Number you entered seems invalid.\n\nPlease use the format 'GSC' followed by 7 digits (e.g., GSC1234567).",
    KA: `ನೀವು ನಮೂದಿಸಿದ GSC ಸಂಖ್ಯೆ ಅಮಾನ್ಯವಾಗಿದೆ. ದಯವಿಟ್ಟು 'GSC' ನಂತರ 7 ಅಂಕಿಗಳನ್ನು ಬಳಸಿ (ಉದಾ, GSC1234567).`,
  },

  // Strings for handleEnterSSPID function
  ENTER_SSP_ID_CONFIRMED: {
    EN: (sspId: string) => `✅ SSP ID confirmed: *${sspId}*`,
    KA: (sspId: string) => `✅ SSP ID confirmed: *${sspId}* -- (TLKA)`,
  },
  ENTER_SSP_ID_INVALID: {
    EN: "The SSP ID you entered appears to be invalid.\n\nPlease enter your 10-digit SSP ID.",
    KA: `ನೀವು ನಮೂದಿಸಿರುವ SSP ID ಅಮಾನ್ಯವಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ 10-ಅಂಕಿಯ SSP ID ನಮೂದಿಸಿ.`,
  },

  // Strings for handleDeclarationAcceptance function
  DECLARATION_REGISTRATION_PROMPT: {
    EN: "Thank you. Registering your grievance, please wait...",
    KA: `ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ದಾಖಲಿಸುವುದಕ್ಕೆ ದಯವಿಟ್ಟು ಕಾಯಿರಿ....`,
  },
  DECLARATION_SUCCESS: {
    EN: (grievanceId: string) => `Thank you for registering with iPGRS. Your grievance ID is:\n*${grievanceId}*\n\nYou can check the status of your grievance anytime through the *Check Status* option.`,
    KA: (grievanceId: string) => `ನಮ್ಮೊಂದಿಗೆ ನೋಂದಾಯಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಕುಂದುಕೊರತೆ ID:\n*${grievanceId}*\n\nನಿಮ್ಮ ಕುಂದುಕೊರತೆಯ ಸ್ಥಿತಿಯನ್ನು ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ "ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ" ಎಂಬ ಆಯ್ಕೆಯ ಮೂಲಕ ಪರಿಶೀಲಿಸಬಹುದು.`  },
  DECLARATION_API_ERROR: {
    EN: (error: string) => `We're sorry, but there was an error: ${error || 'Unknown issue.'}`,
    KA: (error: string) => `ಕ್ಷಮಿಸಿ, ದೋಷ ಕಂಡುಬಂದಿದೆ: ${error || 'ಅಪರಿಚಿತ ಸಮಸ್ಯೆ.'}`
  },
  DECLARATION_RETRY_PROMPT: {
    EN: "Please try again later",
    KA: `ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  DECLARATION_MUST_ACCEPT_PROMPT: {
    EN: "You must accept the declaration to proceed. Please click 'Yes, I Accept' if you wish to continue.",
    KA: `ಮುಂದುವರಿಯಲು ನೀವು ಘೋಷಣೆಯನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಬೇಕು. ಮುಂದುವರಿಯಲು ಬಯಸಿದರೆ 'ಹೌದು, ನಾನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೇನೆ' ಕ್ಲಿಕ್ ಮಾಡಿ.`,
  },

  // Strings for sendDeclarationStatement helper
  DECLARATION_PROMPT_BUTTON_ACCEPT: {
    EN: "✅ Yes, I Accept",
    KA: `ಹೌದು, ಒಪ್ಪುತ್ತೇನೆ`,
  },
  DECLARATION_PROMPT_BUTTON_DECLINE: {
    EN: "❌ No",
    KA: `❌ ಇಲ್ಲ`,
  },

  DECLARATION_STATEMENT: {
    EN: 'Thank you. Please review and accept the declaration.\n\nI hereby declare that my grievance does not pertain to matters related to the Right to Information (RTI) Act, court proceedings, subjudices issues, religious matters, general suggestions, or service - related grievances of government employees, including disciplinary proceedings - unless all prescribed channels of redressal have already been duly exhausted by the concerned employee. I further affirm that the information provided above is true and correct to the best of my knowledge and belief.',
    KA: `ಧನ್ಯವಾದಗಳು. ದಯವಿಟ್ಟು ಘೋಷಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸ್ವೀಕರಿಸಿ.\n\nನಾನು ಈ ಮೂಲಕ ನನ್ನ ಕುಂದುಕೊರತೆಯು ಮಾಹಿತಿ ಹಕ್ಕು (ಆರ್‌ಟಿಐ) ಕಾಯ್ದೆ, ನ್ಯಾಯಾಲಯದ ವಿಚಾರಣೆಗಳು, ಉಪ ನ್ಯಾಯಾಧೀಶರ ಸಮಸ್ಯೆಗಳು, ಧಾರ್ಮಿಕ ವಿಷಯಗಳು, ಸಾಮಾನ್ಯ ಸಲಹೆಗಳು ಅಥವಾ ಸರ್ಕಾರಿ ನೌಕರರ ಸೇವಾ ಸಂಬಂಧಿತ ಕುಂದುಕೊರತೆಗಳಿಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ ಮತ್ತು ಮೇಲೆ ಒದಗಿಸಲಾದ ಮಾಹಿತಿಯು ನನ್ನ ಜ್ಞಾನ ಮತ್ತು ನಂಬಿಕೆಯ ಮಟ್ಟಿಗೆ ಸತ್ಯ ಮತ್ತು ಸರಿಯಾಗಿದೆ ಎಂದು ಈ ಮೂಲಕ ಘೋಷಿಸುತ್ತೇನೆ.`,
  },

  LOCATION_SUB_CATEGORY_PROMPT: {
    EN: "Please select the location object from below options.",
    KA: `ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಿಂದ ಸ್ಥಳ ವಸ್ತುವನ್ನು ಆಯ್ಕೆಮಾಡಿ.`,
  },
  LOCATION_SUB_CATEGORY_ERROR: {
    EN: "I didn't understand your choice. Please select a valid option from the list.",
    KA: `ನಿಮ್ಮ ಆಯ್ಕೆ ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಪಟ್ಟಿಯಿಂದ ಮಾನ್ಯ ಆಯ್ಕೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.`,
  },
  LOCATION_SUB_SUB_CATEGORY_PROMPT: {
    EN: "Please select the location from below options.",
    KA: `ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಿಂದ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.`,
  }
};

// A type for the classification data object to make the function signature clearer
type ClassificationData = {
    message: string;
    department: string;
    line_department: string;
    service_name: string;
    grievance_category: string;
    grievance_sub_category?: string;
    grievance_sub_sub_category?: string;
};

export const SEND_AND_STORE_MESSAGES = {
  // Strings for the 'classification' case
  CLASSIFICATION_REVIEW_PROMPT: {
    EN: (classification: ClassificationData) => `📌 Based on the details you provided, your grievance has been routed to the department mentioned below.
            
_Department_: *${classification.department}*
_Line Department_: *${classification.line_department}*
_Service_: *${classification.service_name}*
_Grievance Category_: *${classification.grievance_category}*
${classification.grievance_sub_category ? `_Grievance Subcategory 1_: *${classification.grievance_sub_category}*` : ""}
${classification.grievance_sub_sub_category ? `_Grievance Subcategory 2_: *${classification.grievance_sub_sub_category}*` : ""}

Would you like to proceed?`.trim(),
    KA: (classification: ClassificationData) => `📌 ನೀವು ಒದಗಿಸಿದ ವಿವರಗಳ ಆಧಾರದ ಮೇಲೆ, ನಿಮ್ಮ ಕುಂದುಕೊರತೆಗಳನ್ನು ಕೆಳಗೆ ತಿಳಿಸಲಾದ ಇಲಾಖೆಗೆ ರವಾನಿಸಲಾಗಿದೆ.
            
_Department_: *${classification.department}*
_Line Department_: *${classification.line_department}*
_Service_: *${classification.service_name}*
_Grievance Category_: *${classification.grievance_category}*
${classification.grievance_sub_category ? `_Grievance Subcategory 1_: *${classification.grievance_sub_category}*` : ""}
${classification.grievance_sub_sub_category ? `_Grievance Subcategory 2_: *${classification.grievance_sub_sub_category}*` : ""}

ನೀವು ಮುಂದುವರೆಯಲು ಬಯಸುತ್ತೀರ?`.trim(),

  },
  YES_BUTTON: {
    EN: "✅ Yes",
    KA: `✅ ಹೌದು`,
  },
  NO_BUTTON: {
    EN: "❌ No",
    KA: `❌ ಇಲ್ಲ`,
  },
  CLASSIFICATION_CONFIRM_BUTTON: {
    EN: "✅ Yes, proceed",
    KA: "ಹೌದು, ಮುಂದುವರಿಯಿರಿ",
  },
  CLASSIFICATION_EDIT_BUTTON: {
    EN: "❌ No, try again",
    KA: "ಇಲ್ಲ, ಮತ್ತೆ ಮಾಡಿ",
  },

  // Strings for the 'completion' case
  COMPLETION_CONFIRMED: {
    EN: "✅ Your grievance details have been confirmed",
    KA: `✅ ನಿಮ್ಮ ಕುಂದುಕೊರತೆಯ ವಿವರಗಳನ್ನು ದೃಢಪಡಿಸಲಾಗಿದೆ.`,
  },
  COMPLETION_PROMPT_FOR_DECLARATION: {
    EN: "Thank you. Finally, please review and accept the declaration.",
    KA: `ಧನ್ಯವಾದಗಳು. ಅಂತಿಮವಾಗಿ, ದಯವಿಟ್ಟು ಘೋಷಣೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸ್ವೀಕರಿಸಿ.`,
  },
  COMPLETION_FAILURE_MANUAL_FORM: {
    EN: "⚠️ I am unable to file your grievance automatically.\n\nPlease register your grievance manually using the IPGRS app or website.",
    KA: `⚠️ ನಿಮ್ಮ ದೂರನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ದಾಖಲಿಸಲು ನನಗೆ ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ.\\n\\nದಯವಿಟ್ಟು ನಿಮ್ಮ ದೂರನ್ನು ಐ.ಪಿ.ಜಿ.ಆರ್.ಎಸ್. ಆಪ್ ಅಥವಾ ವೆಬ್‌ಸೈಟ್ ಬಳಸಿ ಕೈಯಾರೆ ದಾಖಲಿಸಿಕೊಳ್ಳಿ.`,
  },

  // Strings for the 'manual_form' case
  MANUAL_FORM_REASON_PROMPT: {
    EN: (reason: string | undefined) => `⚠️ I am unable to file your grievance automatically${reason ? ` as:\n\n${reason}` : "."}\n\nPlease register your grievance manually using the IPGRS app or website.`,
    KA: (reason: string | undefined) => `⚠️ ನಾನು ನಿಮ್ಮ ದೂರನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ದಾಖಲಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ${reason ? ` ಏಕೆಂದರೆ:\n\n${reason}` : "."}\n\nದಯವಿಟ್ಟು ನಿಮ್ಮ ದೂರನ್ನು IPGRS ಅಪ್ಲಿಕೇಶನ್ ಅಥವಾ ವೆಬ್‌ಸೈಟ್ ಬಳಸಿ ಹಸ್ತಚಾಲಿತವಾಗಿ ನೋಂದಾಯಿಸಿ.`  },
  
  // Strings for default error cases
  DEFAULT_ERROR_MESSAGE: {
    EN: "❌ I encountered an error while processing your request. Please try again later.",
    KA: `❌ ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ ನನಗೆ ದೋಷ ಎದುರಾಯಿತು. ದಯವಿಟ್ಟು ನಂತರ ಪ್ರಯತ್ನಿಸಿ.`,
  },
  SUMMARY_CONFIRMATION_PROMPT: {
    EN: (summary: string) => `📋 Here is a summary of your grievance:\n\n${summary}`,
    KA: (summary: string) => `📋 ನಿಮ್ಮ ದೂರಿನ ಸಾರಾಂಶ ಇಲ್ಲಿದೆ:\n\n${summary}`,
  },
  LOCATION_SUB_CATEGORY_PROMPT: {
    EN: "Select from list, please enter only the number of the item that you want to select:",
    KA: `ಪಟ್ಟಿಯಿಂದ ಆಯ್ಕೆಮಾಡಿ, ದಯವಿಟ್ಟು ನೀವು ಆಯ್ಕೆಮಾಡಲು ಬಯಸುವ ವಸ್ತುವಿನ ಸಂಖ್ಯೆಯನ್ನು ಮಾತ್ರ ನಮೂದಿಸಿ:`,
  },
  LOCATION_SUB_SUB_CATEGORY_PROMPT: {
    EN: "Please select the location from below options.",
    KA: `ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಆಯ್ಕೆಗಳಿಂದ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.`,
  },
  
};