import React from 'react';

const InputField = (props) =>{
  let classList = "text-input transition-color "+props.className
  return (
    <div className="input-field">
      <input {...props} className={classList}></input>
    </div>
  )
}

export default InputField;