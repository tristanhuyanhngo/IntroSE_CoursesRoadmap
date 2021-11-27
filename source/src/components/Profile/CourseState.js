import React from "react";
import CourseCard from "./CourseCard";
import {CourseStateLabel} from "./Label";


export function CurrentCourse() {
    return(
        <div>
            <div className="d-flex justify-content-start card-subtitle mb-3 row">
              <CourseStateLabel currState={"Current"} />
            </div>

            {/* Course cards */}
            <div className="row mb-5">
              <div className="col-5">
                <CourseCard
                  courseName={"Javascript"}
                  category={"Web Programming"}
                />
              </div>
              <div className="col-5">
                <CourseCard
                  courseName={"Javascript"}
                  category={"Web Programming"}
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-5">
                <CourseCard
                  courseName={"Javascript"}
                  category={"Web Programming"}
                />
              </div>
              <div className="col-5">
                <CourseCard
                  courseName={"Javascript"}
                  category={"Web Programming"}
                />
              </div>
            </div>
        </div>
    );
}

export function FinishedCourse() {
  return(
      <div>
          <div className="d-flex justify-content-start card-subtitle mb-3 row">
            <CourseStateLabel currState={"Finished"} />
          </div>

          {/* Course cards */}
          <div className="row mb-5">
            <div className="col-5">
              <CourseCard
                courseName={"Javascript"}
                category={"Web Programming"}
              />
            </div>
            <div className="col-5">
              <CourseCard
                courseName={"Javascript"}
                category={"Web Programming"}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <CourseCard
                courseName={"Javascript"}
                category={"Web Programming"}
              />
            </div>
            <div className="col-5">
              <CourseCard
                courseName={"Javascript"}
                category={"Web Programming"}
              />
            </div>
          </div>
      </div>
  );
}