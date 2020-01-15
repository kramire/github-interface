import React from 'react';
import { Issue, Toggle } from '../';

const IssueList = ({ issueList }) => {
  return (
    <div className="issue-list list">
      <>
        <h1>Issues:</h1>
        <Toggle />
      </>
      {issueList.map(issue => <Issue data={issue} />)}
    </div>
  );
};

export default IssueList;
