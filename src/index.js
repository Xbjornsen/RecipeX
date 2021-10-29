import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import firebase from "firebase";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.envREACT_APP_authDomain,
  databaseURL: process.envREACT_APP_databaseURL,
  projectId: process.envREACT_APP_projectId,
  storageBucket: process.envREACT_APP_storageBucket,
  messagingSenderId: process.envREACT_APP_messagingSenderId,
  appId: process.envREACT_APP_appId,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
