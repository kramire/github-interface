import React from 'react';
import { Repository } from '../';

// List of repositories for the user API Key.
const RepositoryList = ({ repoList, onRepoClick }) => {

  const repoItems = repoList.map(repo => (
    <Repository key={repo.id} data={repo} onRepoClick={onRepoClick} />
  ));

  return (
    <div>
      <h1>Repositories:</h1>
      {repoItems}
    </div>
  );
};

export default RepositoryList;
