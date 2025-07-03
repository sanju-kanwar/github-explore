
import React from 'react';
import { GithubProvider } from './context/GithubContext';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import RepoList from './components/RepoList';

const App = () => {
  return (
    <GithubProvider>
      <div className="container">
        <h1>🔍 Mini GitHub Explorer</h1>
        <SearchBar />
        <UserProfile />
        <RepoList />
      </div>
    </GithubProvider>
  );
};

export default App;
