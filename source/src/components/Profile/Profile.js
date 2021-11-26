import React from "react";
import { ProgressBar } from "react-bootstrap";
import EditButton from "./EditButton";
import { UserProfileLabel, InfoLabel, CourseStateLabel } from "./Label";
import SocialMediaButtons from "./SocialMedia";
import CompletedProgressBar from "./CompletedProgressBar";
import Avatar from './Avatar'
import CourseCard from "./CourseCard";


function Profile(params) {
    return (
        <div id="d-flex justify-content-center">
            <div className="container-lg mt-5">
                <div className="card flex-col p-0 border-0 shadow rounded-3">
                    
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-1 col-lg-3 card-title ms-3 mt-2 fw-bold text-dark"><UserProfileLabel /></div>
                    </div>
                    
                    <div className="ms-5">
                        <div className="row ms-5">
                            <div className="ms-5 col-5 card-subtitle mb-3"><InfoLabel /></div>
                            <div className="col">
                                <div className="d-flex justify-content-start card-subtitle mb-3">
                                    <CourseStateLabel currState={'Current'}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    <CourseCard courseName={'Javascript'} category={'Web Programming'}/>
                                </div>
                            </div>
                            
                        </div>

                        
                        
                        <div className="row my-4 ms-5">
                            <span className="ms-5">
                                <div className="ms-4"><EditButton /></div>
                            </span>
                        </div>

                        <div className="row my-4 ms-5">
                            <div className="ms-5">
                                <SocialMediaButtons />
                            </div>
                        </div>
                    </div>





                    {/* <CourseStateLabel currState={'Completed'}/> */}
                    {/* <CompletedProgressBar completePercent={"100%"}/> */}
                </div>
            </div>
        </div>
    );
}

export default Profile;