import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RepositoryList, IssueList } from '../../Components';
import { selectRepository, selectUser, getIssues } from '../../redux/actions';

const InterfaceContainer = styled.div`
  display: flex;
  justify-content: center;

  > div {
    margin: 0 10px;
  }

  > div:nth-of-type(1) {
    width: 30%;
  }

  > div:nth-of-type(2) {
    width: 70%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    > div {
      margin: 10px 0;
    }

    > div:nth-of-type(1) {
      height: 25vh;
      width: auto;
      overflow: scroll;
    }

    > div:nth-of-type(2) {
      height: 65vh;
      width: auto;
      overflow: scroll;
    }
  }
`;

// Load the Repository List
// Load the Issue List if there are issues to load.
const Interface = ({ repoList, issueList, onRepoClick }) => {
  return (
    <InterfaceContainer>
      <RepositoryList repoList={repoList} onRepoClick={onRepoClick} />
      {issueList.length > 0 && <IssueList issueList={issueList} />}
    </InterfaceContainer>
  );
};

const mapStateToProps = state => {
  return {
    repoList: state.repositories.items,
    issueList: state.issues.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRepoClick: (repoName, userName) => {
      dispatch(selectRepository(repoName));
      dispatch(selectUser(userName));
      dispatch(getIssues());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
