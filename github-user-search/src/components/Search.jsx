import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data.items); // Assuming the response has an 'items' array
    } catch (err) {
      setError("Looks like we can't find the user. Please check the login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && users.map(user => (
        <div key={user.id} className="border-b py-4">
          <img src={user.avatar_url} alt={user.login} width="50" />
          <h3>{user.login}</h3>
          <p>Location: {user.location || 'N/A'}</p>
          <p>Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      ))}
    </div>
  );
};

export default Search;
