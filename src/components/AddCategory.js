import React from 'react';
import InputField from './InputField';
const addCategory = () => {

}
const AddCategory = (props) =>{
  return (
    <section className="add-category">
      <form onSubmit={addCategory}>
        <h1 style={{fontSize : '20px', marginBottom: '30px'}}>Category List</h1>
        <InputField placeholder="Add Category"/>
        <input title="Add Expenses" type="submit" style={{float: 'right'}} className="submit-button transition-background" value="Submit" />        
      </form>
    </section>
  )
}

export default AddCategory;