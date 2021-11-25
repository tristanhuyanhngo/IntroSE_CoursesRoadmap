import React from "react";
import { ProgressBar } from "react-bootstrap";
import EditButton from "./EditButton";
import { UserProfileLabel, InfoLabel, CourseStateLabel } from "./Label";
import SocialMediaButtons from "./SocialMedia";
import CompletedProgressBar from "./CompletedProgressBar";

function Profile(params) {
    return (
        <div id="profile-wrapper">
            <div className="container-lg">
                <div className="row justify-content-center">
                    <div className="col-md-3"><UserProfileLabel /></div>
                </div>
                <div className="row">
                    <div><InfoLabel /></div>
                </div>
                <div className="row my-4">
                    <div><EditButton /></div>
                </div>
                
                
                
                {/* <SocialMediaButtons /> */}
                {/* <CourseStateLabel currState={'Current'}/> */}
                {/* <CourseStateLabel currState={'Completed'}/> */}
                {/* <CompletedProgressBar completePercent={"100%"}/> */}
            </div>
        </div>
    );
}

export default Profile;