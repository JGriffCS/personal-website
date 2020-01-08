import axios, { AxiosPromise } from 'axios';

export interface User {
  token: string;
}

function login(username: string, password: string): AxiosPromise<User> {
  return axios.post('/api/authenticate', { username, password });
}

function logout(): void {
  localStorage.removeItem('user');
}

export default {
  login,
  logout,
};
