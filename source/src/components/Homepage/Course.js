import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import './Course.css'
import { Link } from 'react-router-dom';
import { CourseData } from './CourseData';


function Course() {
    return (
        <>
            <div className='course-title'>All Course</div>
            <div className='course-items'>
                {CourseData.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={item.cName} title={item.title} style={{ backgroundImage: `url(${item.image})` }}></Link>
                    );
                })}
            </div>
        </>
    );
}

export default Course
