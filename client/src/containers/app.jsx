import React from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import { verify, logout } from '../auth/auth-actions'
import Layout from '../components/layout'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    //.then(() => {
    //  this.props.dispatch(getFriends(this.props.auth.user,'auth'))
    //})
  }
  logout() {
    this.props.dispatch(logout())
  }
  componentDidMount() {
    this.props.dispatch(verify())
  }
  render() {
    return (
      <Layout auth={this.props.auth} logout={this.logout}>
        {this.props.children}
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
