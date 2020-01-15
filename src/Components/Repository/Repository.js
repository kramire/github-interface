import React from 'react';
import styled from 'styled-components';
import { StyledItem } from '../../assests/globalStyledComponents';
import { connect } from 'react-redux';
import { selectRepository, selectUser, getIssues } from '../../redux/actions';

const RepoItem = styled(StyledItem)`
  :hover {
    background-color: #bbbbbb !important;
    cursor: pointer !important;
  }
`;

const Repository = ({ data, getIssuesForRepo }) => {
  const { name, owner } = data;
  return (
    <RepoItem className="repository" onClick={() => getIssuesForRepo(name, owner.login)}>
      {name}
    </RepoItem>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getIssuesForRepo: (repoName, userName) => {
      dispatch(selectRepository(repoName));
      dispatch(selectUser(userName));
      dispatch(getIssues());
    },
  };
};

export default connect(null, mapDispatchToProps)(Repository);
