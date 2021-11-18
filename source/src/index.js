import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login_page from './components/Login/Login_page';
import Setting_account from './components/Setting_account/Setting_account'
import Create_info from './components/Create _info/Create_info';
import reportWebVitals from './reportWebVitals';
// import Admin_page from './components/Admin_page/Admin_page'
import User_manage from './components/Admin_page/User_manage'
import Profile from './components/Profile/Profile';



ReactDOM.render(  // <React.StrictMode>
    //<Setting_account />,
    // <Admin_page />,
    //<User_manage/>,
    // <Create_info />,
    <Login_page />,
    //<Profile />,
  // </React.StrictMode>,,
  document.getElementById('root')
);

reportWebVitals();
