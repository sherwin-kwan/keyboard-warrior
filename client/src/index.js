// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Styles
import './styles/index.scss';

// Axios configuration.
// Enter the URL of your API (i.e. the files in the /server folder) here. This can be a local server (which runs on port 3001 by default)
// Or a server where you have deployed the API.
axios.defaults.baseURL = 'https://keyboard-warrior-api.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:3001';
axios.interceptors.request.use(req => {
  console.log('Request:', req);
  return req;
}, err => {
  console.log('Request Error:', err);
  return Promise.reject(err);
});
axios.interceptors.response.use(res => {
  console.log('Response:', res);
  return res;
}, err => {
  console.log('Response Error:', err);
  return Promise.reject(err);
});

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
