import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from data.json in the public directory
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load recipes.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-2xl text-emerald-800">Loading...</p>;
  if (error) return <p className="text-center text-2xl text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-6 bg-amber-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-emerald-800 text-center mb-8">Our Featured Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              aria-label={`Image of ${recipe.title}`}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-emerald-800">{recipe.title}</h2>
              <p className="text-gray-700 mt-2">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}>
                <button
                  className="mt-4 bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition"
                  aria-label={`View details for ${recipe.title}`}
                >
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
