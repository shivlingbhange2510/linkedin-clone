import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react'

   
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//  below is code for auth0
// ReactDOM.render(
//   <React.StrictMode>
//   <Auth0Provider
//     domain="dev-f7k11e5q.us.auth0.com"
//     clientId="URnS8rzeQM1B6ORXKaWUxPIp2kgEGCnX"
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,