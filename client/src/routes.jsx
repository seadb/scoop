import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/layout'
//import Contact from '../../contact'
//<Route path='contact' component={Contact} />
import Login from './auth/login'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Login} />
    </Route>
  </Router>
)
export default Routes
