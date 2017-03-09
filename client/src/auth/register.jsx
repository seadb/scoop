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
    const { dispatch } = this.props
    const state = this.state
    dispatch(register(state.firstName, state.lastName, state.email, state.password))
    this.setState(this.baseState)
    console.log(this.state)
    //this.props.router.go()
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

//  for: React.PropTypes.string,
//  label: React.PropTypes.string,
//  inputClass: React.PropTypes.string,
//  type: React.PropTypes.string,
//  name: React.PropTypes.string,
//  maxLength: React.PropTypes.number,
//  handleChange: React.PropTypes.func,
//  value: React.PropTypes.string
//
//  id SERIAL PRIMARY KEY,
//  first_name VARCHAR(255),
//  last_name VARCHAR(255),
//  email VARCHAR(255),
//  password VARCHAR(2048),
//  bio VARCHAR(1024),
//  age INTEGER,
//  sex VARCHAR,
//  created timestamp default current_timestamp

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(Register)
