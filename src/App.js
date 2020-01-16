import React from 'react';
import { connect } from 'react-redux';
import { Interface, InsertApiKey } from './Containers';

// If there's an API Key to use, load the interface.
// Otherwise, load the form to insert an API Key.
function App({ hasApiKey }) {
  return (
    <div>
      {hasApiKey ? <Interface /> : <InsertApiKey />}
    </div>
  );
}

const mapStateToProps = state => ({
  hasApiKey: state.apiKey.length > 0,
});

export default connect(mapStateToProps, null)(App);
