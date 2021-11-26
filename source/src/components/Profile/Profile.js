import React from "react";
import { ProgressBar } from "react-bootstrap";
import EditButton from "./EditButton";
import { UserProfileLabel, InfoLabel, CourseStateLabel } from "./Label";
import SocialMediaButtons from "./SocialMedia";
import CompletedProgressBar from "./CompletedProgressBar";
import Avatar from './Avatar'


function Profile(params) {
    return (
        <div id="profile-wrapper">
            <div className="container-lg">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-1 col-lg-3"><UserProfileLabel /></div>
                </div>
                <div className="ms-5">
                    <div className="row ms-5">
                        <div className="ms-5 col"><InfoLabel /></div>
                        <div className="col">
                            <div className="d-flex justify-content-start">
                                <CourseStateLabel currState={'Current'}/>
                                
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
    );
}

export default Profile;