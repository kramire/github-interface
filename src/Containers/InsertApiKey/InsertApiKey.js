import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setApiKey, setAuthorizationHeader, getRepositories } from '../../redux/actions';

const ApiContainer = styled.div`
  width: fit-content;
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
  font-size: var(--header-font-size);

  @media (max-width: 768px) {
    font-size: var(--small-header-font-size);
  }
`;

const TextInput = styled.input`
  :focus::placeholder {
    color: transparent;
  }
  border-bottom: 1px solid var(--tertiary-bg);
  color: var(--tertiary-color);
`;

const SubmitButton = styled.button`
  background-color: var(--primary-bg);
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--secondary-color);
  :hover {
    background-color: var(--secondary-bg);
  }
`;

// Basic form that accepts a string for the API Key.
const InsertApiKey = ({ processApiKey }) => {

  const [apiInput, setApiInput] = useState('');
  const handleChange = e => setApiInput(e.target.value);
  const handleClick = e => {
    e.preventDefault();
    processApiKey(apiInput);
  };

  return (
    <ApiContainer>
      <Label>Please enter a GitHub API Key:</Label>
      <div>
        <TextInput type="text" placeholder="API Key" value={apiInput} onChange={handleChange} />
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
      </div>
    </ApiContainer>
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
