import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import App from './containers/App';
//import reducer from './reducer';
import Layout from './components/layout';

//const store =  createStore(reducer);

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)

/*
  <Provider store={store}>
    <Layout />
  </Provider>,
    */
