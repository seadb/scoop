import React from 'react'
import { connect } from 'react-redux'
import Field from '../components/field'
import Form from '../components/form'
import { register } from './auth-actions'

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
    //this.setState(this.baseState)
    console.log(this.state)
    //this.props.router.go()
  }
  render() {
    return (
      <Form formClass="center" id="register" handleSubmit={this.handleSubmit}
        buttonText="Register" buttonClass="button-primary u-full-width">
        <div className="row">
          <div className="six columns">
            <Field label="First Name" inputClass="u-full-width" type="text"
              name="firstName" maxLength="255" handleChange={this.handleChange}
              value={this.state.firstName}
            />
          </div>
          <div className="six columns">
            <Field label="Last Name" inputClass="u-full-width" type="text"
              name="lastName" maxLength="255" handleChange={this.handleChange}
              value={this.state.lastName}
            />
          </div>
        </div>
        <Field label="Email" inputClass="u-full-width" type="email"
          name="email" maxLength="255" handleChange={this.handleChange}
          value={this.state.email}
        />
        <Field label="Password" inputClass="u-full-width" type="password"
          name="password" maxLength="20" handleChange={this.handleChange}
          value={this.state.password}
        />
      </Form>
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

Register = connect(mapStateToProps)(Register)
export default Register
