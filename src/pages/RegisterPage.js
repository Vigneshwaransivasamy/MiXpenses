import React, { Component } from 'react';
import InputField from '../components/InputField';

class RegisterPage extends Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange(e){
    console.log(e);
    // this.setState((prevState) => {
    //   let newState = prevState;
    //   return newState;
    // })
  }

  handleRegister(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(e)
  }
  render() {
    return (
      <div>
        <h1 style={{fontSize : '35px', marginBottom: '30px', textAlign: 'center'}}>MiXpenses</h1>
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
