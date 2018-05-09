import axios from 'axios';

import { authHeader } from '../helpers/auth-header';

function login (username, password) {

  return axios.post('/api/admin/authenticate', { username, password }).then(resp => {
    console.log(resp);

    // if (!resp.ok) {
    //   return Promise.reject(resp.statusText);
    // }

    return resp;
  }).then(user => {
    if (user && user.token) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  });
}

function logout () {
  localStorage.removeItem('user');
}

export const loginService = {
  login,
  logout
};