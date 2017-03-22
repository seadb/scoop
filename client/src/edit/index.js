import React from 'react'
import { connect } from 'react-redux'
import { update, editUser } from './edit-actions'
import { setUser } from '../auth/auth-actions'
import EditForm from './edit-form'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.props.dispatch(editUser({
      [e.target.name]: e.target.value
    }))
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(update(this.props.edit.data, this.props.auth.user.id))
    .then(()=> {
      this.props.dispatch(setUser(this.props.edit.data))
    })
  }
  render() {
    const {edit, auth} = this.props
    const firstName = edit.data.firstName? edit.data.firstName : auth.user.firstName
    const lastName = edit.data.lastName? edit.data.lastName : auth.user.lastName
    const email = edit.data.email? edit.data.email : auth.user.email
    const password = edit.data.password? edit.data.password : auth.user.password
    const bio = edit.data.bio? edit.data.bio : edit.data.bio
    return (
      <EditForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        bio={bio}
      />
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  edit: state.edit
})

export default connect(mapStateToProps)(Edit)
