import React from 'react'
import { connect } from 'react-redux'
import ItemOrField from '../components/item-or-field'
import Field from '../components/field'
import Form from '../components/form'

const EditForm = (props) => (
  <div className="padded">
    <Form formClass="center" id="edit-profile" handleSubmit={props.handleSubmit}
      buttonText="Save" buttonClass="button-primary u-full-width">
      <ItemOrField label="First Name" inputClass="field--invisible" type="text"
        name="firstName" maxLength="255" value={props.firstName}
        editing={props.auth.editing} handleBlur={props.handleBlur}
        handleChange={props.handleChange} handleClick={props.handleClick}
      />
      <Field label="Last Name" inputClass="u-full-width" type="text"
        name="lastName" maxLength="255" handleChange={props.handleChange}
        value={props.lastName}
      />
      <Field label="Email" inputClass="u-full-width" type="email"
        name="email" maxLength="255" handleChange={props.handleChange}
        value={props.email}
      />
      <Field label="Password" inputClass="u-full-width" type="password"
        name="password" maxLength="20" handleChange={props.handleChange}
        value={props.password}
      />
      <Field label="Bio" inputClass="u-full-width" type="text"
        name="bio" maxLength="500" handleChange={props.handleChange}
        value={props.bio}
      />
    </Form>
  </div>
)

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(EditForm)
