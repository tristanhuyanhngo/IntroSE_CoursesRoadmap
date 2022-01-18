import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Homepage/Home'
import Login from './components/Login/Login_page';
import Story_page from './components/Story/Story_page'
import Admin_page from './components/Admin_page/Admin_page';
import Roadmap from './components/Roadmap/Roadmap'
import Setting_account from './components/Setting_account/Setting_account'
import Create_info from './components/Create _info/Create_info';
import User_manage from './components/Admin_page/User_manage'
import Course_manage from './components/Admin_page/Course_manage'
import Course_admin from './components/Course/Course_admin'
import Course from './components/Course/Course'
import Profile from './components/Profile/Profile';
import Navbar from './components/Homepage/Navbar';
import Detail_course from './components/Detail_Course/Detail_course'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/story' element={<Story_page />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/admin' element={<Admin_page />} />
        <Route path='/account' element={<Setting_account />} />
        <Route path='/createInfo' element={<Create_info />} />
        <Route path='/mycourse' element={<Profile />} />
        <Route path='/detailCourse' element={<Detail_course />} />
      </Routes>
    </>
  );
}

export default App;