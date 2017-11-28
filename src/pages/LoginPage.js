import React, { Component } from 'react';
import InputField from '../components/InputField';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
  
    }
  }

  handleLogin(e){
    e.preventDefault();
    e.stopPropagation();
    var form = new FormData(e.target)
    console.log(e);
    axios.post('http://localhost:8080/user/login',form)
      .then(function(res){
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <h1 style={{fontSize : '35px', marginBottom: '30px', textAlign: 'center'}}>MiXpenses</h1>
        <section className="add-category" style={{top: "calc(50% - 145px)"}}>
          <form onSubmit={this.handleLogin}>
            <h1 style={{fontSize : '20px', marginBottom: '30px'}}>Login</h1>              
            <InputField type="email" title="Email" placeholder="Email"/>
            <InputField type="password" title="Password" placeholder="Password"/>
            <input title="Login" type="submit" style={{width: '100%'}} className="submit-button transition-background" value="Submit" />        
          </form>
        </section>
      </div>
    );
  }
}

export default LoginPage;
