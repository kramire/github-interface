import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setApiKey, setAuthorizationHeader, getRepositories } from '../../redux/actions';

const InsertApiKey = ({ processApiKey }) => {
  const [apiInput, setApiInput] = useState('');
  function handleChange(e) {
    setApiInput(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    processApiKey(apiInput);
  }

  return (
    <label>
      Please enter a GitHub API Key:
      <input type="text" placeholder="API Key" value={apiInput} onChange={handleChange} />
      <input type="button" value="Submit" onClick={handleClick} />
    </label>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    processApiKey: apiKey => {
      dispatch(setApiKey(apiKey));
      dispatch(setAuthorizationHeader(apiKey));
      dispatch(getRepositories());
    },
  };
};

export default connect(null, mapDispatchToProps)(InsertApiKey);
