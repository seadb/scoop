import React from 'react'
import { connect } from 'react-redux'
import { login } from './auth-actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault()
    const { dispatch } = this.props
    console.log(this.state)
    dispatch(login(this.state.email, this.state.password))
  }
  render () {
    return (
      <form className="login" id="login" onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="u-full-width"
          type="email"
          name="email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="u-full-width"
          type="password"
          name="password"
          maxLength="20"
          onChange={this.handleChange}
        />
        <input 
          className="button-primary u-full-width"
          type="submit"
          value="Login"
        />
      </form>
    )
  }
}

Login = connect()(Login)
export default Login
