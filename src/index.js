import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { store } from './Redux/store';
import { Provider } from 'react-redux';
// import { LoginButton } from "./Auth0/LoginButton"
// import 'bootstrap/dist/css/bootstrap.min.css';


// import { BrowserRouter } from "react-router-dom";
// https://first-linkdin-clone.netlify.app/
// http://localhost:3000/

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-f7k11e5q.us.auth0.com"
      clientId="URnS8rzeQM1B6ORXKaWUxPIp2kgEGCnX"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//  below is code for auth0
// ReactDOM.render(
//   <React.StrictMode>
  // <Auth0Provider
  //   domain="dev-f7k11e5q.us.auth0.com"
  //   clientId="URnS8rzeQM1B6ORXKaWUxPIp2kgEGCnX"
  //   redirectUri={window.location.origin}
  // >
//     <App />
//   </Auth0Provider>,