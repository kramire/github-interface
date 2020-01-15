import React from 'react';
import './Repository.css';
import { connect } from 'react-redux';
import { selectRepository, selectUser, getIssues } from '../../redux/actions';

const Repository = ({ data, getIssuesForRepo }) => {
  const { name, owner } = data;

  return (
    <div className="repository item" onClick={() => getIssuesForRepo(name, owner.login)}>
      {name}
    </div>
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
