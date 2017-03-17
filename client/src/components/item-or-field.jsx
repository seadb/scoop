import React from 'react'

const ItemOrField = (props) => {
  let component
  if(props.editing === props.name) {
    component = (
      <input
        className={props.inputClass}
        type={props.type}
        name={props.name}
        maxLength={props.maxLength}
        onBlur={props.handleBlur}
        onChange={props.handleChange}
        onClick={props.handleClick}
        value={props.value}
        autoFocus
      />
    )
  }
  else {
    component = (
      <div className={props.itemClass} onClick={props.handleClick} 
        id={props.name}>
        {props.value}
      </div>
    )
  }
  return component
}

export default ItemOrField
