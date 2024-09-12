import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-6 bg-amber-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-5xl font-extrabold text-emerald-800">Recipe Sharing Platform</h1>
        <p className="text-lg mt-4 text-amber-800">Browse, add, and share your favorite recipes, made with love!</p>
      </header>

      {/* Main Content */}
      <main>
        <section className="recipe-list">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Featured Recipes</h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Recipe Card 1 */}
            <div className="recipe-card bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Spaghetti Carbonara"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-amber-800">Spaghetti Carbonara</h3>
              <p className="mt-2 text-gray-700">A creamy Italian pasta dish that combines eggs, cheese, pancetta, and pepper.</p>
              <button className="mt-4 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
                View Recipe
              </button>
            </div>

            {/* Recipe Card 2 */}
            <div className="recipe-card bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Chicken Curry"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-amber-800">Chicken Curry</h3>
              <p className="mt-2 text-gray-700">A fragrant and flavorful Indian dish with tender chicken pieces simmered in a spiced curry sauce.</p>
              <button className="mt-4 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
                View Recipe
              </button>
            </div>

            {/* Recipe Card 3 */}
            <div className="recipe-card bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Vegetable Stir-fry"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-amber-800">Vegetable Stir-fry</h3>
              <p className="mt-2 text-gray-700">A quick and healthy stir-fry with a colorful mix of veggies, soy sauce, and garlic.</p>
              <button className="mt-4 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
                View Recipe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
