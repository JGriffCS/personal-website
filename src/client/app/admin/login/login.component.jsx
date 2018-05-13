import React from 'react';
import PropTypes from 'prop-types';

import { loginService } from '../../services/login.service';

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    loginService.login('jgriffcs_admin', 'jo!*aCL0z&7l2V0E#eMrP#%7i5lJal9aczFu').then((resp) => {
      localStorage.setItem('id_token', resp.data.token);
      this.props.history.push('/admin');
    }, err => console.log(err));
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