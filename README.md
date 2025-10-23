# Artisan Marketplace Platform

> A web platform connecting independent artisans directly with customers, fostering fair trade and celebrating the stories behind handcrafted goods.

This project is a React-based frontend for an online marketplace designed to empower independent craftspeople. It provides them with the tools to showcase their work, share their stories, and reach a broader audience without intermediaries.

## 🌟 About The Project

### The Problem
Independent artisans and craftspeople often struggle to reach broader audiences, secure fair compensation for their work, and communicate the unique stories behind their products due to limitations of traditional retail channels and existing online marketplaces. This results in restricted economic opportunities and a lack of cultural appreciation for handcrafted goods.

### The Solution
This platform directly connects artisans with customers, facilitates equitable payment, and highlights the story, cultural context, and ethical value of each product.

The proposed solution aims to:
* **Enable** artisans to display and sell their work online without intermediaries.
* **Ensure** transparent pricing and fair compensation for creators.
* **Promote** storytelling by allowing artisans to share the origin, craftsmanship, and meaning behind each creation.
* **Foster** a community that values authentic, ethically produced goods and supports local creative economies.

## ✨ Key Features

* **Category Exploration:** Users can browse through various craft categories like Pottery, Fishing, and Handicrafts.
* **Artisan Discovery:** Discover talented artisans for a specific item, view their origin, and read their stories.
* **Artisan Profiles:** View comprehensive artisan profiles with biography, origin, and gallery of all designs they craft.
* **Design Gallery:** Browse an artisan's complete portfolio of designs with responsive grid layout and keyboard navigation support.
* **Item Details & Contact:** Click on any design to view item details, see all artisans making that item, and contact them directly via WhatsApp, email, or phone.
* **Mission-Driven Homepage:** A landing page that clearly communicates the platform's values and goals.
* **Responsive Design:** A clean and modern UI that works on all devices, built with Material-UI.
* **Scalable Architecture:** Built with modern React and Vite, using CSS Modules for maintainable, component-scoped styling.
* **Accessibility First:** Full keyboard navigation, semantic HTML, ARIA labels, and alt text for all images.

## 📸 Screenshots

*(You can take screenshots of your app and replace these placeholders)*

| Homepage                                      | Category Page                               | Artisans List                                   |
| --------------------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| ![Homepage](./public/assets/screenshot-home.png) | ![Category](./public/assets/screenshot-category.png) | ![Artisans](./public/assets/screenshot-artisans.png) |

## 🛠️ Tech Stack

* **[Vite](https://vitejs.dev/):** Next-generation frontend tooling for a blazing fast development experience.
* **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
* **[React Router](https://reactrouter.com/):** For declarative routing in the application.
* **[Material-UI (MUI)](https://mui.com/):** A comprehensive suite of UI tools for building professional layouts and components.
* **[lucide-react](https://lucide.dev/):** Beautifully crafted SVG icons for contact and action buttons.
* **[CSS Modules](https://github.com/css-modules/css-modules):** For locally scoped, conflict-free CSS styling.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.
* [Node.js](https://nodejs.org/en/download/) (which includes npm)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/artisan-marketplace.git](https://github.com/your-username/artisan-marketplace.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd artisan-marketplace
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173` (or the port specified in your terminal).

## 🎯 Core Features

### Artisan Profile Page

The Artisan Profile Page is the centerpiece of the marketplace, showcasing each artisan's unique story and craftsmanship.

**User Journey:**
1. Browse category → Select an artisan → View artisan profile with biography and origin
2. Explore design gallery → Click on a design → View item details with all artisans making that item
3. Contact artisan via WhatsApp, email, or phone for inquiries

**Components:**
- **ProfileHeader** (`src/components/ProfileHeader.jsx`): Displays artisan profile picture, name, origin, and bio
- **DesignCard** (`src/components/DesignCard.jsx`): Gallery cards with keyboard navigation and image fallback support
- **NavBar** (`src/components/NavBar.jsx`): Sticky top navigation with category dropdown menu
- **ArtisanProfilePage** (`src/pages/ArtisanProfilePage.jsx`): Main page showing complete artisan profile and design gallery
- **ItemDetailPage** (`src/pages/ItemDetailPage.jsx`): Item details page with all artisans making the item and contact options

**Accessibility Features:**
- ✅ Full keyboard navigation (Enter/Space on cards)
- ✅ Semantic HTML with aria-labelledby attributes
- ✅ Alt text for all images with SVG placeholder fallbacks
- ✅ Role="alert" for error states
- ✅ Tested with keyboard-only navigation

**Responsive Design:**
- Mobile: 12 columns (single column layout)
- Tablet: 6 columns (2-column layout)
- Desktop: 4 columns (3-column layout)

For detailed implementation, see [`specs/001-artisan-profile-page/quickstart.md`](./specs/001-artisan-profile-page/quickstart.md).

## 📂 Project Structure

The project follows a standard feature-based structure to keep the code organized and maintainable.