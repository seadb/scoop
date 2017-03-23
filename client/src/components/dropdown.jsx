import React from 'react'

const Dropdown = (props) => {
  let options = [];
  for(let i = 0; i < props.options.length; i++) {
    const value = props.options[i]
    let option
    if(props.value === value) {
      option = (
        <option key={i} value={value} selected>
          {value}
        </option>
      )
    }
    else {
      option = (
        <option key={i} value={value}>
          {value}
        </option>
      )
    }
    options.push(option)
  }
  return (
    <fieldset>
      <label htmlFor={props.name}> {props.label} </label>
      <select
        className={props.inputClass}
        name={props.name}
        onChange={props.handleChange}
      >
        <option>---</option>
        {options}
      </select>
    </fieldset>
  )
}

Dropdown.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  options: React.PropTypes.array
}

export default Dropdown
