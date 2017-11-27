import React from 'react';
import './TextItem.css'

const InputField = (props) =>{
  return (
    <div className="input-field">
      <input {...props} className="text-input transition-color"></input>
    </div>
  )
}