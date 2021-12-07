import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import './Course.css'
import { Link } from 'react-router-dom';
import { Featured_courseData } from './Featured_courseData';


function Feature_Course() {
    return (
        <>
            <div className='course-title'>Featured Course</div>
            <div className='course-items'>
                {Featured_courseData.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={item.cName} title={item.title} style={{ backgroundImage: `url(${item.image})` }}></Link>
                    );
                })}
            </div>
        </>
    );
}

export default Feature_Course
