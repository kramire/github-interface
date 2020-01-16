import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers';
import { saveStateLocally, loadLocalState } from './assests/utils';
import App from './App';
import './index.css';

const previousState = loadLocalState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, previousState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  saveStateLocally(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
