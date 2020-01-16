import React from 'react';
import styled from 'styled-components';
import { Issue } from '../';
import { Toggle } from '../../Containers';

const IssueHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// List of issues for the given Repository.
const IssueList = ({ issueList }) => {

  const issueItems = issueList.map(issue => <Issue key={issue.id} data={issue} />);

  return (
    <div>
      <IssueHeader>
        <h1>Issues:</h1>
        <Toggle />
      </IssueHeader>
      {issueItems}
    </div>
  );
};

export default IssueList;
