import React from 'react'

const Form = (props) => (
  <form className={props.formClass} id={props.id} onSubmit={props.handleSubmit} >
    {props.children}
    <input type="submit" value={props.buttonText} className={props.buttonClass}/>
  </form>
)

Form.propTypes = {
  buttonText: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
  formClass: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  id: React.PropTypes.string
}

export default Form
