import React from 'react';
import './App.css';
import Navbar from './components/Homepage/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          {/* <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;


