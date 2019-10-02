import React from 'react';
import './SignUpForm.js'

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  changeInput = (e) => {
    // console.log(e.target.value)

    this.setState({
      //这个可以用变量代表key，用法是[keynameVar]
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("=========");
    console.log(this.state);

    // console.log(e.target);

    // console.log("username:" + e.target.username.value);
    // console.log("passowrd:" + e.target.passowrd.value);

    // console.log('Your name is', e.target.username.value); 

    this.setState(
      {
        username: '',
        password: ''
      }
    )

  }

  render() {
    const { username, password } = this.state;
    return (

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">username: </label>
        <input placeholder="please enter username" type="text" name="username" id="username" value={username} onChange={this.changeInput} />

        <label htmlFor="password">password: </label>
        <input autoComplete="off" placeholder="please enter password" type="password" name="password" id="password" value={password} onChange={this.changeInput} />
        <button type="submit">submit</button>
      </form>
    );
  }
}
export default SignUpForm;