import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6 bg-amber-50 min-h-screen">
        {/* Header Section */}
        <header className="text-center my-8">
          <h1 className="text-5xl font-extrabold text-emerald-800">Recipe Sharing Platform</h1>
          <p className="text-lg mt-4 text-amber-800">Browse, add, and share your favorite recipes, made with love!</p>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
