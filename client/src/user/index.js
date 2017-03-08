import React from 'react'
import { connect } from 'react-redux'
import { getUser } from './user-actions'

class User extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.id))
  }
  render() {
    return (
      <div>
        user profile
        {this.props.params.id}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return ({user: state.user})
}
export default connect( )(User)
