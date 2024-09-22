import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user. Please check the login."); // Updated error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} {/* Displays the updated error message */}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width="100" />
          <h3>{user.name}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
