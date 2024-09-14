import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm
import './App.css';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6 bg-amber-50 min-h-screen">
        {/* Header Section */}
        <header className="text-center my-8">
          <h1 className="text-5xl font-extrabold text-emerald-800">Recipe Sharing Platform</h1>
          <p className="text-lg mt-4 text-amber-800">Browse, add, and share your favorite recipes, made with love!</p>
          {/* Add Recipe Button */}
          <Link
            to="/add-recipe"
            className="inline-block mt-4 bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition"
          >
            Add New Recipe
          </Link>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Add Recipe Form Route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
