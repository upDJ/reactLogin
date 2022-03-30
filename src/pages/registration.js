import axios from "axios";
import React from "react";

export default class Register extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {uname:'', pass:'', confpass:'', fname:'', lname:'',
    email:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  register()
  {
   
    axios.post('http://127.0.0.1:5000/register/', {uname: this.state.uname, pass: this.state.pass, fname: this.state.fname, lname: this.state.lname, email: this.state.email})
      .then(response => console.log(response))
  }

  handleChange(event) 
  {    
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    const{uname, pass, confpass, fname, lname, email} = this.state
    event.preventDefault();
    if(uname === '' || pass === '' || confpass === '' || fname === '' || lname === '' || email === '')
    {
      alert('One or more data fields are empty')
    }
    else if(pass !== confpass)
    {
      alert('Password must be entered twice to confirm')
    }
    else
    {
    alert('Username: ' + uname + '\nName: ' + fname + ' ' + lname + '\nEmail: ' + email)
    this.register()
    }
  }

  render() {
    return (
      <main style={{ padding: "1rem 0" }}> 
      <h2>Sign Up</h2>
      <form onSubmit={this.handleSubmit}>
          <label>
          Username:
          </label>
          <br></br>
          <input type="text" name='uname' value={this.state.uname} onChange={this.handleChange} />
          <br></br><br></br>
          <label>
          Password:
          <br></br>
          <input type="password" name='pass' value={this.state.pass} onChange={this.handleChange}/></label>
          <br></br><br></br>
          <label>
          Confirm Password:
          <br></br>
          <input type="password" name='confpass' value={this.state.confpass} onChange={this.handleChange}/></label>
          <br></br><br></br>
          <label>
          First Name:
          <br></br>
          <input type="text" name='fname' value={this.state.fname} onChange={this.handleChange}/></label>
          <br></br><br></br>
          <label>
          Last Name:
          <br></br>
          <input type="text" name='lname' value={this.state.lname} onChange={this.handleChange}/></label>
          <br></br><br></br>
          <label>
          Email Address:
          <br></br>
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange}/></label>
          <br></br><br></br>
        <input type="submit" value="Submit" />
      </form>
      </main>
    );
  }

}