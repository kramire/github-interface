import React from 'react';
import { RepositoryList, IssueList } from '../../Components';
import repoList from '../../testData.json';
import issueList from '../../testIssueData.json';

const Interface = () => {
  return (
    <div>
      <RepositoryList repoList={repoList} />
      {issueList.length > 0 && <IssueList issueList={issueList} />}
    </div>
  );
};

export default Interface;
