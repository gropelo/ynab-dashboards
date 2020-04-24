import Axios from 'axios';

const getHashToken = () => {
  const index = window.location.hash.indexOf('access_token=') + 13;
  return index > -1 && window.location.hash.substr(index, 64);
}

const getStorageToken = () =>
  localStorage.getItem('token');

const setStorageToken = (token: string) => {
  localStorage.setItem('token', token);
  window.location.href = 'http://localhost:3000';
}

export const invalidate = () => {
  localStorage.removeItem('token');
  window.location.href = 'http://localhost:3000';
}

const configureAxios = (token: string) => {
  Axios.defaults.baseURL = 'https://api.youneedabudget.com';
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  Axios.interceptors.response.use(res => res, err => {
    err.response.status === 401 && invalidate();
    return err;
  });
}

const requestAuthorization = () => {
  const clientId = process.env.REACT_APP_YNAB_CLIENT_ID;
  window.location.href = `https://app.youneedabudget.com/oauth/authorize?client_id=${clientId}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%3F&response_type=token`;
}

export const getToken = () => {
  const storageToken = getStorageToken();
  const token = storageToken || getHashToken();

  if (token) {
    !storageToken && setStorageToken(token);
    configureAxios(token);
    return true;
  }

  requestAuthorization();
};

