import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RepositoryList, IssueList } from '../../Components';

const Container = styled.div`
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

const Interface = ({ repoList, issueList }) => {
  return (
    <Container className="interface">
      <RepositoryList repoList={repoList} />
      {issueList.length > 0 && <IssueList issueList={issueList} />}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    repoList: state.repositories.items,
    issueList: state.issues.items,
  };
};

export default connect(mapStateToProps, null)(Interface);
