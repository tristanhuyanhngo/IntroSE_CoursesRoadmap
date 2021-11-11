// import React from 'react';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login_page from './components/Login/Login_page';
// import Login from './components/Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    <Login_page />,
  // </React.StrictMode>,,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
