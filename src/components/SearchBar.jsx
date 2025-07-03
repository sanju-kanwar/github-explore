// src/components/SearchBar.jsx
import React, { useState, useContext,useEffect } from 'react';
import { GithubContext } from '../context/GithubContext';

const SearchBar = () => {
  const [username, setUsername] = useState('');
    const { fetchUserData, loading, setUser, setRepos, setError } = useContext(GithubContext);

  const handleSearch = () => {
    if (username.trim()) fetchUserData(username.trim());
  };
 useEffect(() => {
    if (username.trim() === '') {
      setUser(null);
      setRepos([]);
      setError('');
    }
  }, [username]);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
