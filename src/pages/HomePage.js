import React, { Component } from 'react';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import CategoryList from '../components/CategoryList';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.addTransaction = this.addTransaction.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      categories: [],
      transactions: []
    }
  }

  handleUpdate(){
    console.log('handle update')
  }

  handleRemove(){
    console.log('handle remove');
  }

  componentDidMount(){
    this.setState({
      categories: [
        {
          "_id":"5a1c4dc14332b5447839c9ea",
          "name":"food",
          "userId":"5a1c43dce4dd8e3b351d1d1c",
          "__v":0,
          "createAt":"2017-11-27T17:39:13.504Z"
        },
        {
          "_id":"5a1cd59da66d367863b2d099",
          "name":"fuel",
          "userId":"5a1c41676ca5d1380a1c9d22",
          "__v":0,
          "createAt":"2017-11-28T03:18:53.544Z"
        },
        {
          "_id":"5a1cd5b9a66d367863b2d09a",
          "name":"travel",
          "userId":"5a1c41676ca5d1380a1c9d22",
          "__v":0,
          "createAt":"2017-11-28T03:19:21.544Z"
        }
      ]
    });
  }

  addTransaction(){

  }
  render() {
    return (
      <div className="HomePage">
        <div style={{position: 'fixed', top: '0', left: '0'}}>
          <section className="add-expenses">
            <form onSubmit={this.addTransaction}>
              <h1 style={{fontSize : '14px', marginBottom: '30px'}}>Add Transaction</h1>              
              <InputField placeholder="Title"/>
                <SelectField style={{display: 'inline-block'}} options={['food', 'fuel']} />
              <InputField placeholder="Amount"/>
              <TextField placeholder="Note"/>
              <input title="Add Expenses" type="submit" style={{float: 'right'}} className="submit-button transition-background" value="Submit" />        
            </form>
          </section>
          <section className="add-category">
            <form onSubmit={this.addCategory}>
              <h1 style={{fontSize : '14px', marginBottom: '30px'}}>Category List</h1>              
              {/* <SelectField style={{display: 'inline-block'}} options={['food', 'fuel']} /> */}
              {/* <CategoryList 
                items={this.state.categories}
                updateFieldValue={this.handleUpdate}
                handleDeleteList={this.handleRemove} 
                handleChange={this.handleChange}/> */}
              <InputField placeholder="Add Category"/>
              <input title="Add Expenses" type="submit" style={{float: 'right'}} className="submit-button transition-background" value="Submit" />        
            </form>
          </section>
        </div>
          
      </div>
    );
  }
}

export default HomePage;
