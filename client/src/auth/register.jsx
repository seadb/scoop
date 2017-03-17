import React from 'react'
import { connect } from 'react-redux'
import { register } from './auth-actions'
import RegisterForm from './register-form'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.baseState = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.state = this.baseState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(register(this.state))
    this.setState(this.baseState)
  }
  render() {
    return (
      <RegisterForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        password={this.state.password}
      />
    )
  }
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Register)
