import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/Homepage/Home'
import Login from './components/Login/Login_page';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;


