import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Homepage/Home'
import Login from './components/Login/Login_page';
import Story_page from './components/Story/Story_page'
import Admin_page from './components/Admin_page/Admin_page';
import Roadmap from './components/Roadmap/Roadmap'




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/story' element={<Story_page />} />
        <Route path='/admin' element={<Admin_page />} />
        <Route path='/roadmap' element={<Roadmap />} />
      </Routes>
    </>
  );
}

export default App;


