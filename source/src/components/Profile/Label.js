import React from "react";
import './CSS/Label.css'

export function UserProfileLabel() {
    return (
        <div id="user-profile-wrapper component component-Label">
            <div className="profile-label-class">
                <div className="profile-context-class">
                    <div className="align-label-text">
                        <div style={{width: "auto", height: "auto"}}>
                            <label className="profile-class">USER PROFILE</label>
                        </div>
                    </div>
                </div>
                <div style={{display: "none"}}></div>
            </div>

            <div className="rule-class">
                <canvas width="689" height="12" className="rule-line-class">

                </canvas>
            </div>

            <div style={{display: "none"}}></div>
        </div>
    );
}

export function InfoLabel() {
    return (
        <div className="infor-wrapper component component-Label">
            <div className="profile-label-class">
                <div className="profile-context-class">
                    <div className="align-label-text">
                        <div style={{width: "auto", height: "auto"}}>
                            <label className="info-label-class">
                                @QuanBlueeeee
                            </label>
                        </div>
                    </div>
                </div>
                <div style={{display: "none"}}></div>
            </div>

            <div className="profile-label-class">
                <div className="profile-context-class">
                    <div className="align-label-text">
                        <div style={{width: "auto", height: "auto"}}>
                            <label className="name-label-class">
                                Nguyễn Thanh Quân
                            </label>
                        </div>
                    </div>
                </div>
            </div>
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