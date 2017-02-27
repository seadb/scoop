import React from 'react'
import { connect } from 'react-redux'
import { login } from './auth-actions'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
    this.baseState = this.state
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
    const { dispatch } = this.props
    dispatch(login(this.state.email, this.state.password))
    //this.setState(this.baseState)
    console.log(this.state)
    this.props.router.go()
  }
  render () {
    return (
      <form className="center" id="login" onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="u-full-width"
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <label htmlFor="password">Password</label>
        <input
          className="u-full-width"
          type="password"
          name="password"
          maxLength="20"
          onChange={this.handleChange}
          value={this.state.password}
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

const mapStateToProps = (state) => {
  console.log(state)
  return (
    state
  )
}
Login = connect(mapStateToProps)(Login)
export default Login
