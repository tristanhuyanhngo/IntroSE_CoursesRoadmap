import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login_page from './components/Login/Login_page';
import Create_info from './components/Create _info/Create_info';
import Admin_page from './components/Admin_page/Admin_page';
import Setting_account from './components/Setting_account/Setting_account'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    <Setting_account />,
    // <Admin_page />,
    // <Create_info />,
    // <Login_page />,
  // </React.StrictMode>,,
  document.getElementById('root')
);

reportWebVitals();
