import React from "react";
import { ProgressBar } from "react-bootstrap";
import EditButton from "./EditButton";
import { UserProfileLabel, InfoLabel, CourseStateLabel } from "./Label";
import SocialMediaButtons from "./SocialMedia";
import CompletedProgressBar from "./CompletedProgressBar";

function Profile(params) {
    return (
        <div id="profile-wrapper">
            {/* <UserProfileLabel /> */}
            {/* <InfoLabel /> */}
            {/* <EditButton /> */}
            {/* <SocialMediaButtons /> */}
            {/* <CourseStateLabel currState={'Current'}/> */}
            {/* <CourseStateLabel currState={'Completed'}/> */}
            <CompletedProgressBar completePercent={"50%"}/>
        </div>
    );
}

export default Profile;