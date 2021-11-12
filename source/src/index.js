import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login_page from './components/Login/Login_page';
import Create_info from './components/Create _info/Create_info';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    // <Create_info />,
    <Login_page />,
  // </React.StrictMode>,,
  document.getElementById('root')
);

reportWebVitals();
