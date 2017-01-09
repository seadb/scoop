const react = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const reactRedux = require('react-redux');
const farmReducer = require('../user/user-reducer')


const store = redux.createStore(
  reducer
)

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)


