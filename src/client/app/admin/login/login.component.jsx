import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { loginService } from '../../services/login.service';

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default Login;