import React from 'react';
import Navbar from './Navbar';
import './Home_style.css'
import Course from './Course';




function Home() {

    return (
        <div>
            <Navbar />
            <div className='title'>Course Roadmap</div>
            <Course />
        </div>
    )
}
export default Home;