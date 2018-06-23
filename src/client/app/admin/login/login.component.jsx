import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import loginService from '../../services/login.service';
import Alert from '../../shared/alert/alert.component';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  componentDidMount() {
    // If token is still valid, redirect from the login page
    const token = localStorage.getItem('id_token');
    if (token) {
      const { exp } = jwtDecode(token);
      if (exp > (new Date()).getTime() / 1000) {
        this.props.history.push('/admin');
      }
    }
  }

  inputChange(e) {
    const { target } = e;

    this.setState({
      [target.name]: target.value,
    });
  }

  login(e) {
    e.preventDefault();

    loginService.login(this.state.username, this.state.password).then((resp) => {
      localStorage.setItem('id_token', resp.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`;
      this.props.history.push('/admin');
    }, (err) => {
      this.setState({ error: err.message });
    });
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-header">
          <h2>Admin Login</h2>
        </div>
        {
          this.state.error ?
            <Alert type="error" message={this.state.error} /> :
            ''
        }
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
