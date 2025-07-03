// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';

const UserProfile = () => {
  const { user, error } = useContext(GithubContext);
  if (error) return <p className="error">{error}</p>;
  if (!user) return null;

  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.login}</h2>
      <p>{user.bio}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">View GitHub Profile</a>
    </div>
  );
};

export default UserProfile;
