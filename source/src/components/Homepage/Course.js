import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import './Course.css'
import { Link } from 'react-router-dom';
import { CourseData } from './CourseData';


function Course() {
    return (
        <>
            <div className='course'>
                <div className='course-items'>
                    {CourseData.map((item, index) => {
                        return (
                            <div key={index} className={item.cName} style={{
                                backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <Link to={item.path}>
                                    {/* <img src={process.env.PUBLIC_URL + item.image} alt="" /> */}
                                    {/* <span>{item.title}</span> */}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Course
