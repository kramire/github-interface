import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilterParam, getIssues } from '../../redux/actions';
import { capitalize } from '../../assests/utils';

// Drop down list to filter the displayed issues.
const Toggle = ({ stateFilter, setIssueFilter }) => {

  const [filter, setFilter] = useState(stateFilter);
  const handleChange = e => setIssueFilter(e.target.value);
  const filters = ['assigned', 'created', 'mentioned', 'subscribed', 'all'];

  return (
    <div>
      <label>
        Filter:
        <select onChange={handleChange} value={stateFilter}>
          {filters.map(el => <option key={filters.indexOf(el)} value={el}>{capitalize(el)}</option>)}
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
