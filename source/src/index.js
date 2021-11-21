import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Login_page from './components/Login/Login_page';
import Setting_account from './components/Setting_account/Setting_account'
import Create_info from './components/Create _info/Create_info';
import reportWebVitals from './reportWebVitals';
import User_manage from './components/Admin_page/User_manage'
import Profile from './components/Profile/Profile';
import Navbar from './components/Homepage/Navbar';



ReactDOM.render(
  // <React.StrictMode>
  //<Setting_account />,
  //<User_manage/>,
  //<Create_info />,
  <Login_page />,
  //<Profile />,
  // </React.StrictMode>,,
  //<App />,
  document.getElementById('root')
);

reportWebVitals();
