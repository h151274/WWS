import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
          domain="dev-7rfyriarpv1mrxsv.us.auth0.com"
          clientId="9Jf02XNLaBI8UU5iBTlDwsjGb2GwC50F"
          redirectUri={window.location.origin}
      >
    <App />
      </Auth0Provider>
  </React.StrictMode>
);