import React from 'react';

const TextField = (props) =>{
  return (
    <div className="text-field">
      <textarea {...props} className="text-input transition-color"></textarea>
    </div>
  )
}

export default TextField;