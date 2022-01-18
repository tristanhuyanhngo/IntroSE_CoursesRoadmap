import React from 'react';
import Navbar from './Navbar';
import './Home_style.css'
import Course from './Course';
import Featured_course from './Featured_course';
import Featured_story from './Featured_story';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='title'>Course Roadmap</div>
            <Course />
            <Featured_course />
            <Featured_story />
        </div>
    )
}
export default Home;