import React, { Component } from 'react';
import AddCategory from '../components/AddCategory';
import AddExpenses from '../components/AddExpenses.js'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.addTransaction = this.addTransaction.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = {
      categories: [],
      transactions: [],
      page: 'add-expenses'
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
        <div>
          { this.state.page === 'add-expenses' ? <AddExpenses/> :
            this.state.page === 'add-category' ? <AddCategory/> : <AddExpenses/>}
        </div>
          
      </div>
    );
  }
}

export default HomePage;
