import React,{Component} from 'react';

const SelectField = (props) =>{
  return (
    <div className="input-field">
      <select {...props} className="text-input transition-color">
        {
          props.options.map(
          (value, i) => <option key={i}>{value}</option>)
        }
      </select>
    </div>
  )
}

export default SelectField;
