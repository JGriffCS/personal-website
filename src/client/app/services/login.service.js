import axios from 'axios';

import { authHeader } from '../helpers/auth-header';

export const loginService = {
  login,
  logout
};

function login (username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return axios.post('/admin/authenticate', requestOptions).then(resp => {
    console.log(resp);

    if (!resp.ok) {
      return Promise.reject(resp.statusText);
    }

    return resp.json();
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