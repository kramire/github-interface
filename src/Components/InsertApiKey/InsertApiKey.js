import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setApiKey, setAuthorizationHeader, getRepositories } from '../../redux/actions';

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  > * {
    margin: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  font-size: 20px;
`;

const TextInput = styled.input`
  :focus::placeholder {
    color: transparent;
  }
  border-bottom: 1px solid #bbb;
  color: #717171;
`;

const SubmitButton = styled.button`
  background-color: #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  color: #3a3a3a;
  :hover {
    background-color: #c1c1c1;
  }
`;

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
    <Div>
      <Label>Please enter a GitHub API Key:</Label>
      <div>
        <TextInput type="text" placeholder="API Key" value={apiInput} onChange={handleChange} />
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
      </div>
    </Div>
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
