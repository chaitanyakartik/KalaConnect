document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    // This object holds all the information for the marketplace.
    // Using placeholder images from picsum.photos for demonstration.
    const marketData = {
        "Pottery": {
            description: "Hand-shaped clay creations, baked to perfection.",
            imageUrl: "https://picsum.photos/400/300?image=1071",
            items: {
                "Pots": [
                    { name: "Leela Kumari", origin: "Jaipur, Rajasthan", bio: "Leela has been crafting traditional Rajasthani blue pottery for over 30 years.", price: "Starts at $40", designs: ["https://picsum.photos/400/300?image=106", "https://picsum.photos/400/300?image=219"] },
                    { name: "Ramesh Prajapati", origin: "Kutch, Gujarat", bio: "Ramesh specializes in Khavda pottery, a unique terracotta craft.", price: "Starts at $35", designs: ["https://picsum.photos/400/300?image=292", "https://picsum.photos/400/300?image=315"] }
                ],
                "Decoration Items": [
                    { name: "Aarav Singh", origin: "Khurja, Uttar Pradesh", bio: "Aarav creates vibrant ceramic vases and decorative plates.", price: "Starts at $25", designs: ["https://picsum.photos/400/300?image=367", "https://picsum.photos/400/300?image=404"] }
                ],
                "Kitchen Utensils": [
                    { name: "Priya Chauhan", origin: "Longpi, Manipur", bio: "Priya makes stunning black stone pottery, perfect for cooking.", price: "Starts at $50", designs: ["https://picsum.photos/400/300?image=431"] }
                ],
                "Toys": [
                    { name: "Leela Kumari", origin: "Jaipur, Rajasthan", bio: "Leela also crafts charming clay toys for children.", price: "Starts at $15", designs: ["https://picsum.photos/400/300?image=433"] }
                ],
            }
        },
        "Fishing": {
            description: "Sustainably sourced equipment from coastal communities.",
            imageUrl: "https://picsum.photos/400/300?image=1062",
            items: {
                "Fishnets": [
                    { name: "Kannan", origin: "Kochi, Kerala", bio: "Kannan weaves durable fishing nets using techniques passed down generations.", price: "Starts at $100", designs: ["https://picsum.photos/400/300?image=531"] }
                ],
                "Boats": [
                    { name: "Devan", origin: "Mangalore, Karnataka", bio: "Devan is a master craftsman of small, sturdy fishing boats.", price: "Contact for quote", designs: ["https://picsum.photos/400/300?image=550"] }
                ],
                "Fishing Equipment": [
                    { name: "Meena", origin: "Rameswaram, Tamil Nadu", bio: "Meena hand-forges high-quality hooks and spears.", price: "Starts at $20", designs: ["https://picsum.photos/400/300?image=562"] }
                ]
            }
        },
        "Handicrafts": {
            description: "Exquisite handmade textiles, toys, and accessories.",
            imageUrl: "https://picsum.photos/400/300?image=1075",
            items: {
                "Wooden Toys": [
                    { name: "Gopal Verma", origin: "Channapatna, Karnataka", bio: "Gopal creates safe and colorful lacquered wooden toys.", price: "Starts at $10", designs: ["https://picsum.photos/400/300?image=603", "https://picsum.photos/400/300?image=642"] }
                ],
                "Saris": [
                    { name: "Anjali Devi", origin: "Kanchipuram, Tamil Nadu", bio: "Anjali is a weaver of world-famous Kanjeevaram silk sarees.", price: "Starts at $250", designs: ["https://picsum.photos/400/300?image=655", "https://picsum.photos/400/300?image=744"] }
                ],
                "Slippers": [
                     { name: "Farida Begum", origin: "Agra, Uttar Pradesh", bio: "Farida crafts beautiful leather juttis with intricate embroidery.", price: "Starts at $45", designs: ["https://picsum.photos/400/300?image=835"] }
                ]
            }
        }
    };

    // --- DOM ELEMENTS ---
    const views = document.querySelectorAll('.view');
    const categoriesContainer = document.getElementById('categories-container');
    const itemsContainer = document.getElementById('items-container');
    const itemsTitle = document.getElementById('items-title');
    const artisansContainer = document.getElementById('artisans-container');
    const artisansTitle = document.getElementById('artisans-title');
    const designsContainer = document.getElementById('designs-container');
    const designsTitle = document.getElementById('designs-title');
    const artisanBio = document.getElementById('artisan-bio');

    let historyStack = ['categories-view']; // Keep track of navigation

    // --- FUNCTIONS ---

    // Function to switch between views
    function showView(viewId) {
        views.forEach(view => view.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        window.scrollTo(0, 0); // Scroll to top on view change
    }

    // Function to display items for a chosen category
    function displayItems(categoryName) {
        const category = marketData[categoryName];
        itemsTitle.textContent = `Items in ${categoryName}`;
        itemsContainer.innerHTML = ''; // Clear previous items

        for (const itemName in category.items) {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <h3>${itemName}</h3>
                </div>
            `;
            card.addEventListener('click', () => {
                historyStack.push('items-view');
                displayArtisans(categoryName, itemName);
            });
            itemsContainer.appendChild(card);
        }
        showView('items-view');
    }

    // Function to display artisans for a chosen item
    function displayArtisans(categoryName, itemName) {
        const artisans = marketData[categoryName].items[itemName];
        artisansTitle.textContent = `Artisans for ${itemName}`;
        artisansContainer.innerHTML = ''; // Clear previous artisans

        artisans.forEach(artisan => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <h3>${artisan.name}</h3>
                    <p class="artisan-info">From: ${artisan.origin}</p>
                    <p>${artisan.bio}</p>
                    <p class="price-tag">${artisan.price}</p>
                </div>
            `;
            card.addEventListener('click', () => {
                historyStack.push('artisans-view');
                displayDesigns(artisan);
            });
            artisansContainer.appendChild(card);
        });
        showView('artisans-view');
    }

    // Function to display designs of a chosen artisan
    function displayDesigns(artisan) {
        designsTitle.textContent = `Designs by ${artisan.name}`;
        artisanBio.textContent = artisan.bio;
        designsContainer.innerHTML = ''; // Clear previous designs

        artisan.designs.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Design by ${artisan.name}`;
            designsContainer.appendChild(img);
        });
        showView('designs-view');
    }


    // --- INITIALIZATION ---
    function initialize() {
        // Create category cards on page load
        for (const categoryName in marketData) {
            const category = marketData[categoryName];
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${category.imageUrl}" alt="${categoryName}">
                <div class="card-content">
                    <h3>${categoryName}</h3>
                    <p>${category.description}</p>
                </div>
            `;
            card.addEventListener('click', () => {
                historyStack = ['categories-view']; // Reset history when going to a new category
                displayItems(categoryName);
            });
            categoriesContainer.appendChild(card);
        }

        // Setup back buttons
        document.querySelectorAll('.back-btn').forEach(button => {
            button.addEventListener('click', () => {
                const targetView = historyStack.pop() || 'categories-view';
                showView(targetView);
            });
        });
    }

    initialize(); // Start the app
});