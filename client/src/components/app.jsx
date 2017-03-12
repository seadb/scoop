import React from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import { verify } from '../auth/auth-actions'
import Layout from './layout'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.dispatch(verify(cookie.load('token')))
  }
  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
