import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Interface } from './Containers';
import { InsertApiKey } from './Components';


function App({ hasApiKey }) {
  return (
    <div className="app">
      {hasApiKey ? <Interface /> : <InsertApiKey />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    hasApiKey: state.apiKey.length > 0,
  };
};

export default connect(mapStateToProps, null)(App);
