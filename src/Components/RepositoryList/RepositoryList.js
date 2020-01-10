import React from 'react';
import { Repository } from '../';

const RepositoryList = ({ repoList }) => {
  return (
    <div className="repo-list list">
      <h1>Repositories:</h1>
      {repoList.map(repo => <Repository data={repo} />)}
    </div>
  );
};

export default RepositoryList;
