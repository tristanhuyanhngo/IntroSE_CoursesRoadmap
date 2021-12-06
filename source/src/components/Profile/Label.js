import React, { useEffect, useState } from "react";
import { SelectDataUser } from "../../Handler/Database/Data_setup";
import { auth } from "../../Handler/filebase_config";
import "./CSS/Label.css";

export function UserProfileLabel() {
  return (
    <div id="user-profile-wrapper component component-Label">
      <label
        style={{ border: "1px solid red" }}
        className="profile-class "
      ></label>
    </div>
  );
}

export function InfoLabel() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    SelectDataUser().then((result) => {
      if (result) {
        const { FirstName, LastName, UserName } = result;
        setFirstName(FirstName);
        setLastName(LastName);
        setUsername(UserName);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <label className="info-label-class">{username}</label>
      </div>
      <div>
        <label className="name-label-class">{`${firstName} ${lastName}`}</label>
      </div>
    </div>
  );
}

export function CourseStateLabel({ currState }) {
  return (
    <div id="current-course-wrapper">
      <div className="profile-label-class">
        <div className="profile-context-class">
          <div className="align-label-text">
            <div style={{ width: "auto", height: "auto" }}>
              <label className="current-course-label-class">
                {`${currState} Course`}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
