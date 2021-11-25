import './admin_page.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import User_manage from './User_manage'
import Course_manage from './Course_manage'
import React, { Component }  from 'react';

class Admin_page extends Component {
    constructor(props){
      super(props);
    }
    

    render(){
        return (
            <div className='d-flex justify-content-center'>
                <div className="container-lg mt-5 ">
                    <div className="card flex-col p-0 border-0 shadow rounded-3">
                        <h1 id ='card-title' className="card-title ms-3 mt-2 fw-bold text-dark">Admin setting</h1>
                        <h6 id ='card-subtitle' className="card-subtitle ms-3 mb-3">Change web information</h6>
    
                        {/* Navigate */}
                        <ul className="nav nav-tabs" id='myTab' role="tablist">
                            <li className="nav-item" role="presentation">
                                <button class="nav-link active" id="user-tab" data-bs-toggle="tab" data-bs-target="#user" type="button" role="tab" aria-controls="user" aria-selected="true">User</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button class="nav-link" id="course-tab" data-bs-toggle="tab" data-bs-target="#course" type="button" role="tab" aria-controls="course" aria-selected="false">Course</button>
                            </li>
                        </ul>   

                        {/* Navigate control */}
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                                <User_manage />
                            </div>
                            <div class="tab-pane fade" id="course" role="tabpanel" aria-labelledby="course-tab">
                                <Course_manage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                    
        )
    }

}
export default Admin_page;