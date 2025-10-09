// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArtisanListPage from './pages/ArtisanListPage';

function App() {
  return (
    <div>
      {/* You can add a permanent Navbar component here later */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/item/:itemId" element={<ArtisanListPage />} />
        {/* You would add a route for the artisan's specific design page here */}
        {/* e.g., <Route path="/artisan/:artisanId" element={<ArtisanProfilePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;