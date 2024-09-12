import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the recipe details from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setError('Recipe not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load recipe');
      });
  }, [id]);

  if (error) {
    return <div className="container mx-auto p-6 text-center text-red-600">{error}</div>;
  }

  if (!recipe) {
    return <div className="container mx-auto p-6 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <Link to="/" className="inline-block mb-4 text-emerald-600 hover:underline">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Ingredients</h2>
            <ul className="list-disc ml-6 mb-6 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Instructions</h2>
            <ol className="list-decimal ml-6 text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
