import '../Course/course_admin.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import Course_admin from '../Course/Course_admin'

class Course_manage extends Component {

    constructor(props){
        super(props);
        this.courses = [
            {
                id: 'htmlcss',
                name: 'HTML/CSS',
                level: 'Beginner',
                num_lesson: '20',
                catalog:'web',
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'pythonoperate',
                name: 'Python operate',
                level: 'Beginner',
                num_lesson: '1',
                catalog:'basic',
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'reactjs',
                name: 'REACTJS',
                level: 'intermediate',
                num_lesson: '30',
                catalog:'web',
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }

        ];

        this.state = {
            filter:'',
            course: this.courses,
        }
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };


    render() {
        const lowercasedFilter = this.state.filter.toLowerCase();
        const filteredData = this.courses.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return (
            <div className="card border-0 m-3">
                <div className='table-title p-4'>
                    <h2 className='card-title fw-b mb-2'>Course Management </h2>

                    <div className="input-group d-flex align-items-center">
                        <div className="form-floating">
                            <input type='search' value={this.filter} onChange={this.handleChange} className="form-control" id="floatingInput" placeholder=" " />
                            <label htmlFor="floatingInput">Search</label>
                        </div>
                        <div className="input-group-text btn-search py-0">
                            <BiSearchAlt className='icon icon-search'/>
                        </div>
                    </div>
                        
                </div >
                <div className='d-flex flex-column justify-content-center'>
                    {filteredData.map((course, index) => (
                        <Course_admin 
                            key = {course.id}
                            index = {index}
                            id = {course.id}
                            name={course.name}
                            level= {course.level}
                            num_lesson = {course.num_lesson}
                            descript = {course.descript}
                        />
                            
                    ))}
                </div>
            </div>
        );
    }
}
export default Course_manage;