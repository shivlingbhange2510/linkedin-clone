import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-f7k11e5q.us.auth0.com"
    clientId="URnS8rzeQM1B6ORXKaWUxPIp2kgEGCnX"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
