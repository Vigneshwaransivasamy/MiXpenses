import React from 'react';
import InputField from './InputField';
import TextField from './TextField';
import SelectField from './SelectField';
const addTransaction = () => {}
const AddExpenses = (props) =>{
  return (
    <section className="add-expenses">
      <form onSubmit={addTransaction}>
        <h1 style={{fontSize : '20px', marginBottom: '30px'}}>Add Transaction</h1>              
        <InputField placeholder="Title"/>
          <SelectField style={{display: 'inline-block'}} defaultValue="Category" options={['food', 'fuel']} />
        <InputField placeholder="Amount"/>
        <TextField placeholder="Note"/>
        <input title="Add Expenses" type="submit" style={{float: 'right'}} className="submit-button transition-background" value="Submit" />        
      </form>
    </section>
  )
}

export default AddExpenses;
