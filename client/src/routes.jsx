import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/app'
import Index from './components/index'
import Login from './auth/login'
import Register from './auth/register'
import User from './user'
import Edit from './edit'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Index} />
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
      <Route path='edit' component={Edit} />
      <Route path=':id' component={User} />
    </Route>
  </Router>
)
export default Routes
//<IndexRoute component={Login} />
