import React from 'react';
import PropTypes from 'prop-types';

import { loginService } from '../../services/login.service';

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log('hi');
    loginService.login('jgriffcs_admin', 'jo!*aCL0z&7l2V0E#eMrP#%7i5lJal9aczFu').then((resp) => {
      console.log(resp);
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