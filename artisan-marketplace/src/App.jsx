// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArtisanListPage from './pages/ArtisanListPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import ItemDetailPage from './pages/ItemDetailPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/item/:itemId" element={<ItemDetailPage />} />
        <Route path="/artisan/:artisanId" element={<ArtisanProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;