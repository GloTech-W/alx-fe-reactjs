import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (ingredients.split(',').length < 2) newErrors.ingredients = 'At least 2 ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to backend or update state)
      console.log('Recipe submitted:', { title, ingredients, steps });
      // Clear form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-6 bg-amber-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6 text-center">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="text-lg font-medium text-gray-700 md:w-1/4">Recipe Title</label>
            <input
              type="text"
              className="mt-2 md:mt-0 block w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
            {errors.title && <p className="text-red-600 mt-2">{errors.title}</p>}
          </div>

          {/* Ingredients Input */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="text-lg font-medium text-gray-700 md:w-1/4">Ingredients</label>
            <textarea
              className="mt-2 md:mt-0 block w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients separated by commas"
            />
            {errors.ingredients && <p className="text-red-600 mt-2">{errors.ingredients}</p>}
          </div>

          {/* Steps Input */}
          <div className="flex flex-col md:flex-row md:items-start">
            <label className="text-lg font-medium text-gray-700 md:w-1/4">Preparation Steps</label>
            <textarea
              className="mt-2 md:mt-0 block w-full md:w-3/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              rows="6"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Enter the preparation steps"
            />
            {errors.steps && <p className="text-red-600 mt-2">{errors.steps}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition w-full md:w-1/3"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
