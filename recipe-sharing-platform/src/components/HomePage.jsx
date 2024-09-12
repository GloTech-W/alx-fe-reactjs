import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-6 bg-amber-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-emerald-800 text-center mb-8">Our Featured Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-emerald-800">{recipe.title}</h2>
              <p className="text-gray-700 mt-2">{recipe.summary}</p>
              <button className="mt-4 bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
