import React from 'react'
import { connect } from 'react-redux'
import { getUser } from './user-actions'
import Profile from './profile'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.id))
  }
  render() {
    return (
      <Profile user={this.state.user} id={this.props.params.id} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return ({user: state.user})
}
export default connect( )(User)
