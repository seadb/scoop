import React from 'react'
import { connect } from 'react-redux'
import { getUser } from './user-actions'
import Profile from './profile'

class User extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.id))
  }
  render() {
    console.log(this.props.user)
    return (
      <Profile user={this.props.user} id={this.props.params.id} />
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    loading: state.user.loading,
    error: state.user.error,
    user: state.user.data
  })
}
export default connect(mapStateToProps)(User)
