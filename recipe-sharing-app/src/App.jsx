import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails component
import SearchBar from './components/SearchBar'; // Import SearchBar component
import IngredientFilter from './components/IngredientFilter'; // Import IngredientFilter component
import FavoritesList from './components/FavoritesList'; // Import FavoritesList component
import RecommendationsList from './components/RecommendationsList'; // Import RecommendationsList component
import { useRecipeStore } from './components/recipeStore'; // Import the Zustand store

function App() {
  const [count, setCount] = useState(0);
  const favorites = useRecipeStore(state => state.favorites); // Access the favorites from the Zustand store

  return (
    <Router>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Recipe Sharing App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar /> {/* Add SearchBar to the home route */}
            <IngredientFilter /> {/* Add IngredientFilter to the home route */}
            <AddRecipeForm />
            <RecipeList />

            {favorites.length > 0 && ( /* Conditionally render FavoritesList if there are any favorite recipes */
              <section>
                <h2>Your Favorites</h2>
                <FavoritesList />
              </section>
            )}

            <section>
              <h2>Recommended for You</h2>
              <RecommendationsList /> {/* Always show RecommendationsList */}
            </section>
          </>
        } />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  );
}

export default App;
