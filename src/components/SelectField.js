import React from 'react';

const SelectField = (props) =>{
  return (
    <div className="input-field">
      <select {...props} className="text-input transition-color">
        {
          props.options.map(
          (value, i) => <option key={i} selected={(i===0)?true: false} disabled={(i===0)?true: false}>{value}</option>)
        }
      </select>
    </div>
  )
}

export default SelectField;
