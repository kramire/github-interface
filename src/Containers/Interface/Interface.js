import React from 'react';
import { RepositoryList, IssueList } from '../../Components';
import './Interface.css';
import { connect } from 'react-redux';

const Interface = ({ repoList, issueList }) => {
  return (
    <div className="interface">
      <RepositoryList repoList={repoList} />
      {issueList.length > 0 && <IssueList issueList={issueList} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    repoList: state.repositories.items,
    issueList: state.issues.items,
  };
};

export default connect(mapStateToProps, null)(Interface);
