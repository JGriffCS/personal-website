import * as React from 'react';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode';
import { RouteComponentProps } from 'react-router-dom';

import loginService from '../../services/login.service';
import Alert from '../../../shared/components/alert/alert';

import './login.pcss';

interface State {
  username: string;
  password: string;
  error?: string;
}

class Login extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  componentDidMount(): void {
    // If token is still valid, redirect from the login page
    const token = localStorage.getItem('id_token');
    if (token) {
      const { exp } = jwtDecode(token);
      if (exp > (new Date()).getTime() / 1000) {
        this.props.history.push('/admin');
      }
    }
  }

  inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = e;

    // TODO: This is kind of silly at this point. Probably better to just bind the name and stop using dynamic keys
    this.setState({
      [target.name]: target.value,
    } as Pick<State, keyof State>);
  };

  login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    loginService.login(this.state.username, this.state.password).then((resp) => {
      localStorage.setItem('id_token', resp.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`;
      this.props.history.push('/admin');
    }, (err) => {
      this.setState({ error: err.message });
    });
  };

  render(): React.ReactNode {
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
            <input type="submit" className="btn btn-primary login-submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
