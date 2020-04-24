import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getToken } from './utils/auth';
import "typeface-roboto";

if (getToken()) {
  ReactDOM.render(<App />, document.getElementById('root'));
}