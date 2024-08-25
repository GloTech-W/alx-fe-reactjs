// src/recipe-sharing-app/src/components/DeleteRecipeButton.jsx
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleClick = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to home or another route after deletion
  };

  return (
    <button onClick={handleClick}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
