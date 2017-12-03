import React, { Component } from 'react';
import InputField from '../components/InputField';
import TextField from '../components/TextField';
import axios from 'axios';

class BitlyPage extends Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      bitlink: ""
    }
  }
  
  componentWillMount = () => {
    this.setState({bitlink: ""});
  }
  

  handleLogin(e){
    e.preventDefault();
    e.stopPropagation();
    var form = new FormData(e.target);
    var _this = this;
    console.log(e);
    axios.post('http://localhost:8080/bitlink/create',form)
      .then(function(res){
        var link = res.data.data._id;
        console.log(link);
        _this.setState(() => {
          return {bitlink: `http://localhost:8080/bitlink/${link}`}
        })
        console.log(res);
      })
      .catch(function(err){
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <h1 style={{fontSize : '35px', marginBottom: '30px', textAlign: 'center'}}>MOCK BITLINK</h1>
        <section className="add-category" style={{top: "calc(50% - 145px)"}}>
          <form onSubmit={this.handleLogin}>
            <h1 style={{fontSize : '20px', marginBottom: '30px'}}>CREATE BITLINK</h1>              
            <TextField 
              type="text"
              name="createdLink"
              style={{marginBottom: '20px'}} 
              title="PASTE LONG URL" 
              placeholder="LINK WILL BE CREATED HERE ..."
              value={this.state.bitlink} readOnly/>
            <TextField 
              type="text"
              name="link"
              style={{marginBottom: '20px'}} 
              title="PASTE LONG URL" 
              placeholder="PASTE LONG URL"/>
            <InputField 
              type="number" 
              style={{marginBottom: '20px'}}
              name="expiresAt"
              title="EXPIRES AFTER (IN MINUTES)" 
              placeholder="EXPIRES AFTER(IN MINUTES)"/>
            <InputField title="create" type="submit" style={{width: '100%'}} className="submit-button transition-background" value="CREATE" />        
          </form>
        </section>
      </div>
    );
  }
}

export default BitlyPage;
