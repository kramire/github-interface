import React from 'react';
import { Issue } from '../';

const IssueList = ({ issueList }) => {
  return (
    <div className="issue-list list">
      <h1>Issues:</h1>
      {issueList.map(issue => <Issue data={issue} />)}
    </div>
  );
};

export default IssueList;
