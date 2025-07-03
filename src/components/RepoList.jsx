// src/components/RepoList.jsx
import React, { useContext, useState } from 'react';
import { GithubContext } from '../context/GithubContext';

const RepoList = () => {
  const { repos } = useContext(GithubContext);
  const [filter, setFilter] = useState('');
  const [sortType, setSortType] = useState('');

  if (!repos || repos.length === 0) return null;

  const filtered = repos
    .filter((repo) => repo.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sortType === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="repo-list">
      <div className="controls">
        <input
          type="text"
          placeholder="Filter by repo name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort by</option>
          <option value="stars">Stars</option>
          <option value="name">Name</option>
        </select>
      </div>
      {filtered.length === 0 ? (
        <p className="error">No repositories found.</p>
      ) : (
        <ul>
          {filtered.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <strong>{repo.name}</strong>
              </a>
              <p>{repo.description}</p>
              <span>⭐ {repo.stargazers_count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
