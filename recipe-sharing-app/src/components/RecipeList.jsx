// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from './recipeStore'; // Updated import path

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found. Add some!</p>
      )}
    </div>
  );
};

export default RecipeList;
