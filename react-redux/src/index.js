import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// import { StoreContext } from 'react-redux'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

