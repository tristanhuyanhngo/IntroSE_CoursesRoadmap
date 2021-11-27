import "./roadmap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Course from '../Course/Course'

class Roadmap extends Component {
    constructor(props){
        super(props);
        this.courses = [
            {
                id: 'htmlcss',
                name: 'HTML/CSS',
                level: 'Beginner',
                num_lesson: '20',
                catalogue:['web','basic'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'htmladvance',
                name: 'HTML Advance',
                level: 'Intermediate',
                num_lesson: '19',
                catalogue:['web','advance'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'htmlmaster',
                name: 'HTML Master',
                level: 'master',
                num_lesson: '19',
                catalogue:['web','advance'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'cssmaster',
                name: 'CSS Master',
                level: 'master',
                num_lesson: '12',
                catalogue:['web','advance'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'pythonoperate',
                name: 'Python operate',
                level: 'Beginner',
                num_lesson: '1',
                catalogue:['basic'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'reactjs',
                name: 'REACTJS',
                level: 'intermediate',
                num_lesson: '30',
                catalogue:['web'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'cssadvance',
                name: 'CSS Advance',
                level: 'intermediate',
                num_lesson: '13',
                catalogue:['web','advance'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 'cshapebasic',
                name: 'C# Basic',
                level: 'beginner',
                num_lesson: '20',
                catalogue:['app','basic'],
                descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }

        ];
    }


    render_catalogue=(catalogue)=>{
        let courses_element = this.courses.map((course, index) => {
            for (let j = 0; j < this.courses.length; j++) {
                if (course.catalogue.includes(catalogue))
                    return ( 
                        <div className = 'col-4 col-lg-3 mx-1'>
                            <Course
                                id= { course.id }
                                name={ course.name }
                                level= { course.level }
                                num_lesson= { course.num_lesson }
                                descript= { course.descript }
                            /> 
                        </div>
                    );
            };
        });
                
        return courses_element
    }
        
    scroll=(id, direct)=>{
        let width = window.innerWidth;

        let move = width;

        if (direct == 'prev') 
            move = -move

        document.getElementById(id).scrollLeft += move;


    }

    render_roadmap =()=> {

        var catalogues = ['web', 'app', 'basic', 'advance'];
        var catalogues_name = ['Web', 'Application', 'Basic', 'Advance'];
        let catalogue_element = catalogues.map((catalogue, index) => {
            return ( 
                <div className='card-body pb-0'>
                    <button className='btn btn-viewmore'>
                        <h2 className='card-title fw-bold'>{ catalogues_name[index] }</h2>
                    </button>  
                    
                    <div className ='row'>
                        <button className='col-1 button-scroll ps-0 s--1' onClick={() => this.scroll('row-course' + catalogue, 'prev')}>&#8249;</button>

                        <div  id = {'row-course' + catalogue} className = 'col row-course w-100'>
                            <div className = 'd-flex mb-3'>
                                { this.render_catalogue(catalogue) }
                            </div>
                        </div>

                        <button className='col-1 button-scroll ps-0 e--1' onClick={() => this.scroll('row-course' + catalogue, 'next')}>&#8250;</button>

                    </div>
                    
                    
                </div>
            );
        });

        return catalogue_element;
        
    }

   
        

    render()
    {
        return (
            <div className='d-flex justify-content-center'>
                <div className="container-lg card mt-5 pb-5">
                    {/* Header */}
                    <div className="flex-col p-0 mb-3 border-0 rounded-3">
                        <h1 id ='card-title' className="card-title ms-3 mt-2 fw-bold text-dark">Roadmap</h1>
                    </div>

                    {this.render_roadmap()}
                </div>
            </div>
        );
    }
}


export default Roadmap;
