import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilterParam, getIssues } from '../../redux/actions';

const Toggle = ({ setIssueFilter }) => {
  const [filter, setFilter] = useState('');
  function handleChange(e) {
    setIssueFilter(e.target.value);
  }
  return (
    <div>
      <label>Filter:
        <select onChange={handleChange}>
          <option selected value="assigned">Assigned</option>
          <option value="created">Created</option>
          <option value="mentioned">Mentioned</option>
          <option value="subscribed">Subscribed</option>
          <option value="all">All</option>
        </select>
      </label>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setIssueFilter: filter => {
      dispatch(setFilterParam(filter));
      dispatch(getIssues());
    },
  };
};

export default connect(null, mapDispatchToProps)(Toggle);
