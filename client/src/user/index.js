import React from 'react'
import { connect } from 'react-redux'
import { getUser } from './user-actions'
import { addFriend } from '../friends/friend-actions'
import Profile from './profile'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.addFriend = this.addFriend.bind(this);
  }
  addFriend() {
    this.props.dispatch(addFriend(this.props.auth.user, this.props.params.id))
  }
  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.id))
  }
  render() {
    return (
      <Profile
        user={this.props.user.data}
        id={this.props.params.id}
        addFriend={this.addFriend}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    auth: state.auth
  })
}
export default connect(mapStateToProps)(User)
