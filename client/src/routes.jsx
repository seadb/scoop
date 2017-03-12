import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/app'
import Login from './auth/login'
import Register from './auth/register'
import User from './user'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
      <Route path=':id' component={User} />
    </Route>
  </Router>
)
export default Routes
//<IndexRoute component={Login} />
