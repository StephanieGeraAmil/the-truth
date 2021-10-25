import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/magnolia_sky.ttf';
import './fonts/SulphurPoint-Regular.ttf';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
          domain="dev-7pl37pty.us.auth0.com"
          clientId="vNXWfuyHWr4jF94dV51O4ZclSOpkA8Hw"
          redirectUri={window.location.origin}
        >
                 <App />
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

