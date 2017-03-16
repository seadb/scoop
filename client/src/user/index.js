import React from 'react'
import { connect } from 'react-redux'
import { getUser, setUser } from './user-actions'
import { addFriend, deleteFriend, getFriends } from '../friends/friend-actions'
import Profile from './profile'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.addFriend = this.addFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }
  componentDidUpdate(prevProps) {
    if(!(prevProps.params.id === this.props.params.id)) {
      this.props.dispatch(getUser(this.props.params.id))
    }
  }
  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.id))
  }
  addFriend() {
    this.props.dispatch(addFriend(this.props.auth.user, this.props.params.id))
    //  .then(() => {
    //    this.props.dispatch(getFriends(this.props.auth.user, 'auth'))
    //  })
  }
  deleteFriend() {
    this.props.dispatch(deleteFriend(this.props.auth.user, this.props.params.id))
  }
  render() {
    return (
      <Profile
        user={this.props.user}
        auth={this.props.auth}
        addFriend={this.addFriend}
        deleteFriend={this.deleteFriend}
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
