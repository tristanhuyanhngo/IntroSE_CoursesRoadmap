import React from "react";
import './CSS/Label.css'

export function UserProfileLabel() {
    return (
        <div id="user-profile-wrapper component component-Label">
            <label style={{border: "1px solid red"}} className="profile-class "></label>
        </div>
    );
}

export function InfoLabel() {
    return (
        <div className="infor-wrapper">
            <div><label className="info-label-class">@QuanBlueeeee</label></div>
            <div><label className="name-label-class">Nguyễn Thanh Quân</label></div>
        </div>
    );
}

export function CourseStateLabel({currState}) {
    return (
        <div id="current-course-wrapper">
            <div className="profile-label-class">
                    <div className="profile-context-class">
                        <div className="align-label-text">
                            <div style={{width: "auto", height: "auto"}}>
                                <label className="current-course-label-class">
                                    {`${currState} Course`}
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}