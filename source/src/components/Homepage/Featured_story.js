import React from 'react';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import './Course.css'
import { Link } from 'react-router-dom';
import { Featured_storyData } from './Featured_storyData';


function Featured_Story() {
    return (
        <>
            <div className='course-title'>Featured Story</div>
            <div className='course-items'>
                {Featured_storyData.map((item, index) => {
                    return (
                        <Link to={item.path} key={index} className={item.cName} title={item.title} style={{ backgroundImage: `url(${item.image})` }}></Link>
                    );
                })}
            </div>
        </>
    );
}

export default Featured_Story
