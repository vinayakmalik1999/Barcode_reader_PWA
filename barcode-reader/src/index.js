import React , { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Bootstrap from 'react-bootstrap';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> b5f3da6df25626c3aad2ae095bf603441cc56eef
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
