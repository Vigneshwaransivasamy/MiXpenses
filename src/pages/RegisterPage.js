import React, { Component } from 'react';
import InputField from '../components/InputField';
import axios from 'axios';

class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(e){
    e.preventDefault();
    e.stopPropagation();
    debugger;
    var form = new FormData(e.target);
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    console.log(e);
    axios.post('http://localhost:8080/user/register',form, config)
      .then(function(res){
        history.pushState('/user/login');
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <h1 style={{fontSize : '35px', marginBottom: '30px', textAlign: 'center'}}>Xpenses</h1>
        <section className="add-category">
          <form onSubmit={this.handleRegister}>
            <h1 style={{fontSize : '20px', marginBottom: '30px'}}>Register</h1>
            <InputField 
              type="text" 
              name="name" 
              onChange={(e)=> this.handleChange} 
              title="Name"
              placeholder="Name"/>                     
            <InputField 
              type="email" 
              name="email" 
              onChange={(e)=> this.handleChange}
              title="Email"
              placeholder="Email"/>
            <InputField 
              type="password" 
              name="password" 
              onChange={(e)=> this.handleChange} 
              title="Password" 
              placeholder="Password"/>
            <input title="Login" type="submit" style={{width: '100%'}} className="submit-button transition-background" value="Submit" />        
          </form>
        </section>
        </div>
    );
  }
}

export default RegisterPage;
