// Input field which Renders label + input
import React from 'react'

const Field = (props) => (
  <fieldset>
    <label htmlFor={props.name}>{props.label}</label> 
    <input
      className={props.inputClass}
      type={props.type}
      name={props.name}
      maxLength={props.maxLength}
      onChange={props.handleChange}
      value={props.value}
    />
  </fieldset>
)

Field.propTypes = {
  label: React.PropTypes.string,
  inputClass: React.PropTypes.string,
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  maxLength: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  value: React.PropTypes.string
}

export default Field
