import React from "react";
import EditButton from "./EditButton";
import { InfoLabel } from "./Label";
import SocialMediaButtons from "./SocialMedia";
import CompletedProgressBar from "./CompletedProgressBar";
import { FinishedCourse, CurrentCourse } from "./CourseState";
import 'bootstrap/dist/css/bootstrap.min.css'
import Avatar from "./Avatar";

function Profile(params) {
  return (
    <div id="d-flex justify-content-center">
      <div className="container-lg mt-5">
        <div className="card flex-col p-0 border-0 shadow rounded-3">
          {/* Label User Profile */}
          <h1 className="row d-flex justify-content-center card-title ms-3 mt-5 fw-bold text-dark text-decoration-underline fs-1">
            USER PROFILE
          </h1>

          {/* Main content of Profile page begin from here */}
          <div className="row mx-1">
            {/* Information col */}
            <div className="ms-2 col-5 card-subtitle mb-3">
              {/* Name of user */}
              <div className="row ms-5">
                <div className="mt-5 mb-5">
                  <Avatar />
                </div>
                <InfoLabel />
              </div>

              {/* Edit button */}
              <div className="row my-4 ms-5">
                <div className="ms-4">
                  <EditButton />
                </div>
              </div>

              {/* Social media link */}
              <div className="row my-4 ms-5">
                <SocialMediaButtons />
              </div>
            </div>

            {/* Current and finished course col */}
            <div className="ms-2 col mt-5 mb-5">
              {/* Current course row */}
              <CurrentCourse />

              {/* Finished course row */}
              <FinishedCourse />

              {/* Progress bar */}
              <div className="row mt-5 mb-3">
                <CompletedProgressBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
