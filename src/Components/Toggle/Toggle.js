import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilterParam, getIssues } from '../../redux/actions';
import { capitalize } from '../../assests/utils';

const Toggle = ({ stateFilter, setIssueFilter }) => {
  const [filter, setFilter] = useState(stateFilter);
  function handleChange(e) {
    setIssueFilter(e.target.value);
  }
  const filterOptions = ["assigned", "created", "mentioned", "subscribed", "all"];
  return (
    <div>
      <label>
        Filter:
        <select onChange={handleChange} value={stateFilter}>
          {filterOptions.map(el => <option value={el}>{capitalize(el)}</option>)}
        </select>
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stateFilter: state.issues.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIssueFilter: filter => {
      dispatch(setFilterParam(filter));
      dispatch(getIssues());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
