import React from 'react';
import './App.css';
import { Interface } from './Containers';
import { useEffect } from 'react';
import { getRepositories } from './redux/actions';
import { connect } from 'react-redux';

function App({ getRepositories }) {
  useEffect(() => getRepositories());

  return (
    <div className="app">
      <Interface />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getRepositories: () => dispatch(getRepositories()),
  };
};

export default connect(null, mapDispatchToProps)(App);
