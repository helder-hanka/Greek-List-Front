import React from "react";
import qs from "qs";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
  state = {
    name: "",
    password: ""
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      password: this.state.password,
    };

    const body = JSON.stringify(user);
    Axios({
        method: 'post',
        url: 'http://localhost:8000/security/login',
        data: body
      })
    .then(response => response.data)
    .then(data => {
        localStorage.setItem('user', JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem('user')))
    })
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" id="name" onChange={this.onChange} />
          <input
            type="text"
            name="password"
            id="password"
            onChange={this.onChange}
          />
          <button>Log In</button>
        </form>
      </>
    );
  }
}

export default Login;
