import { loginConstants } from '../constants/action-types/login';
import { loginService } from '../services/login.service';

function login (username, password) {
  return dispatch => {
    loginService.login(username, password).then(user => {
      dispatch(success(user));
      history.push('/admin');
    }, err => {
      dispatch(error(err));
    });
  }

  function success (user) { console.log(user); return { type: loginConstants.LOGIN_SUCCESS, user }; }
  function error (err) { console.log(err); return { type: loginConstants.LOGIN_FAILURE, err }; }
}

function logout () {
  loginService.logout();
  return { type: loginConstants.LOGOUT };
}

export const loginActions = {
  login,
  logout
};