import './course_admin.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState }  from 'react';


export default function Course(props){

    const [course, setCourse] = useState({
        index: props.index,
        id: props.id,
        name:props.name,
        level: props.level,
        num_lesson: props.num_lesson,
        descript: props.descript,
        catalog: props.catalog,
        open: false
    })

    return (
        <button className="card pb-0 border-0 course">
            <div className='row full mb-0'>
                <div className = 'col-md card mt-2 course-card border-0 shadow'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col mb-2 text-start'>
                                <h4 className="card-title fw-bold text-dark">
                                    { course.name }
                                </h4>
                                <h6 className="card-subtitle">
                                    {course.level} ({course.num_lesson} lessons)
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className='card-body descript overflow-auto mb-3'>
                        {course.descript}
                    </div>
                </div>

            </div>

        </button>
    );
}