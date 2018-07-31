import axios from 'axios';

function login(username, password) {
  return axios.post('/api/authenticate', { username, password }).then((user) => {
    if (user && user.token) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  });
}

function logout() {
  localStorage.removeItem('user');
}

export default {
  login,
  logout,
};
