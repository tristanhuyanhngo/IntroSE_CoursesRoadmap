import './course_admin.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';


class Course extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: props.index,
            id: props.id,
            name:props.name,
            level: props.level,
            num_lesson: props.num_lesson,
            descript: props.descript,
            open: false
        }
    }

    render() {
        return (
            <div className="card pb-0 border-0 d-flex align-items-center">
                <div className='row full mb-4'>
                    <div className = 'col-md card mt-2 course-card border-0 shadow'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col mb-2'>
                                    <h4 className="card-title fw-bold text-dark">
                                        { this.state.name }
                                    </h4>
                                    <h6 className="card-subtitle">
                                        {this.state.level} ({this.state.num_lesson} lessons)
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='card-body descript overflow-auto mb-3'>
                            {this.state.descript}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Course;