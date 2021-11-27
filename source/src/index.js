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
import Course_manage from './components/Admin_page/Course_manage'
import Course_admin from './components/Course/Course_admin'
import Admin_page from './components/Admin_page/Admin_page';
import Profile from './components/Profile/Profile';
import Navbar from './components/Homepage/Navbar';
import Story_page from './components/Story/Story_page'
import Roadmap from './components/Roadmap/Roadmap'


ReactDOM.render(
  <React.StrictMode>
    {/* <Setting_account />, */}
    {/* <Roadmap />, */}
    {/* <User_manage/>, */}
    {/* <Course_manage />, */}
    {/* <Admin_page /> */}
    {/* <Story_page /> */}
    {/* <Create_info />, */}
    {/* <Login_page />, */}
    {/* <Profile /> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
