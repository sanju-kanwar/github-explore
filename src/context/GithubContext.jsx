// src/context/GithubContext.jsx
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);
    setRepos([]);

    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

      setUser(userResponse.data);
      setRepos(repoResponse.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('User not found.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GithubContext.Provider value={{user, repos, loading, error,
  fetchUserData,
  setUser, setRepos, setError }}>
      {children}
    </GithubContext.Provider>
  );
};
