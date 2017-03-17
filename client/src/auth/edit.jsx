import React from 'react'
import { connect } from 'react-redux'
import { update, editUser, copyUser } from './auth-actions'
import EditForm from './edit-form'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const target = e.target;
    this.props.dispatch(editUser({
      [target.name]: target.value
    }))
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(update(this.props.auth.updates, this.props.auth.user.id))
    //this.setState({})
  }
  componentDidMount(){
      this.props.dispatch(copyUser())
  }
  componentDidUpdate(prevProps, prevState) {
    if(!(prevProps.auth.user.id === this.props.auth.user.id)) {
      this.props.dispatch(copyUser())
    }
  }
  render() {
    return (
      <EditForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.props.auth.edit.firstName}
        lastName={this.props.auth.edit.lastName}
        email={this.props.auth.edit.email}
        password={this.props.auth.edit.password}
        bio={this.props.auth.edit.bio}
      />
    )
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Edit)
