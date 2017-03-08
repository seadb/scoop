import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/layout'
//import Contact from '../../contact'
//<Route path='contact' component={Contact} />
import Login from './auth/login'
import Register from './auth/register'
import User from './user'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
      <Route path=':id' component={User} />
    </Route>
  </Router>
)
export default Routes
//<IndexRoute component={Login} />
