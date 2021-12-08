import './story.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, Component }  from 'react';


export default function Story(props) {
    const [story, setStory] = useState({
        index: props.index,
        id: props.id,
        name:props.name,
        username: props.username,
        avatar: props.avatar,
        story: props.story,
        timestamp: props.timestamp
    })

    function convert_10digit_timestamp() {
        // https://www.epochconverter.com/
        var UNIX_timestamp = parseInt(story.timestamp)
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = '0' + a.getHours();
        var min = '0' + a.getMinutes();
        
        var time =  hour.substr(-2) + ':' + min.substr(-2) + ' - ' + date + ', ' + month + ', ' + year;

        return time;
    }

    return (
        <div className="card pb-0 border-0 d-flex align-items-center">
            <div className='row full mb-3'>
                <div className = 'card border-0'>
                    <div className='row'>
                        <div className='col-4 col-sm-3 col-md-2 d-flex flex-column align-items-end'>
                            <img className='avt-story' src={story.avatar} alt={story.username}/>

                            <h5 className="card-title fw-bold">
                                { story.username }
                            </h5>
                            <h6 className="card-subtitle">
                                {story.name}
                            </h6>
                        </div>

                        <div className='col mb-3 pe-4'>
                            <div className='row story mb-2'>
                                {story.story}
                            </div>
                            <div className='row d-flex time justify-content-end'>
                                {convert_10digit_timestamp()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}