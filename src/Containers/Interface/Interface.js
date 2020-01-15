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
