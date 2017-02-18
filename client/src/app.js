import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import App from './containers/App';
import reducer from './reducer';
import Routes from './routes';

//console.log(reducer)
const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

/*
    <Layout />
    */
