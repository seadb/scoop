import React from 'react'
import Field from '../components/field'
import Form from '../components/form'
import Dropdown from '../components/dropdown'

const EditForm = (props) => (
  <div className="padded">
    <Form formClass="center" id="edit-profile" handleSubmit={props.handleSubmit}
      buttonText="Save" buttonClass="button-primary u-full-width">
      <Field label="First Name" inputClass="u-full-width" type="text"
        name="firstName" maxLength="255" handleChange={props.handleChange}
        value={props.firstName}
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
      <Dropdown label="Gender" inputClass="u-full-width" name="sex"
        handleChange={props.handleChange} options={['Male','Female','Neutral']}
        value={props.sex}
      />
    </Form>
  </div>
)

export default EditForm
