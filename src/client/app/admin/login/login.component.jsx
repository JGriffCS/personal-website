import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { loginService } from '../../services/login.service';

class Login extends React.Component {
  constructor (props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount () {
    // If token is still valid, redirect from the login page
    const token = localStorage.getItem('id_token');
    if (token) {
      const { exp } = jwtDecode(token);
      if (exp > (new Date()).getTime() / 1000) {
        this.props.history.push('/admin');
      }
    }
  }

  inputChange (e) {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  }

  login (e) {
    e.preventDefault();

    loginService.login(this.state.username, this.state.password).then((resp) => {
      localStorage.setItem('id_token', resp.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`;
      this.props.history.push('/admin');
    }, err => console.log(err));
  }

  render () {
    return (
      <div className="login-container">
        <div className="login-header">
          <h2>Admin Login</h2>
        </div>
        <div className="login-form">
          <form onSubmit={this.login}>
            <input name="username" type="text" value={this.state.username} onChange={this.inputChange} />
            <input name="password" type="password" value={this.state.password} onChange={this.inputChange} />
            <input type="submit" className="login-submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;