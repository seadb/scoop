import React from 'react'
import Field from '../components/field'
import Form from '../components/form'

const RegisterForm = (props) => (
  <div className="padded">
    <Form formClass="center" id="register" handleSubmit={props.handleSubmit}
      buttonText="Register" buttonClass="button-primary u-full-width">
      <div className="row">
        <div className="six columns">
          <Field label="First Name" inputClass="u-full-width" type="text"
            name="firstName" maxLength="255" handleChange={props.handleChange}
            value={props.firstName}
          />
        </div>
        <div className="six columns">
          <Field label="Last Name" inputClass="u-full-width" type="text"
            name="lastName" maxLength="255" handleChange={props.handleChange}
            value={props.lastName}
          />
        </div>
      </div>
      <Field label="Email" inputClass="u-full-width" type="email"
        name="email" maxLength="255" handleChange={props.handleChange}
        value={props.email}
      />
      <Field label="Password" inputClass="u-full-width" type="password"
        name="password" maxLength="20" handleChange={props.handleChange}
        value={props.password}
      />
    </Form>
  </div>
)

export default RegisterForm
