import React from 'react';

const ButtonField = (props) =>{
  let classList = "submit-button transition-background "+props.className;
  return (
    <div className="button-field">
      <button className={classList} {...props}>{props.value}</button>
    </div>
  )
}

export default ButtonField;