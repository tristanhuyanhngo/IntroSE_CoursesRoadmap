import "./setting_account.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { SelectDataUser, UpdateData,checktime } from "../../Handler/Database/Data_setup";
import { uploadAvatar } from "../../Handler/Storage/StorageHandler";
import React, { Component } from "react";

class Personal extends Component {
  changeInfo = () => {
    UpdateData(localStorage.getItem("ID"));
    uploadAvatar(localStorage.getItem("ID"));
  };


  GetData = () => {
    SelectDataUser(localStorage.getItem("ID")).then((snapshot) => {
      const fname = document.getElementById("fname");
      const lname = document.getElementById("lname");
      const username = document.getElementById("username");
      const Email = document.getElementById("emailInput");
      const phone = document.getElementById("phone");
      const gen = document.getElementById("select");
      const birthday = document.getElementById("birthday");
      const bio = document.getElementById("bioS");

      fname.value = snapshot.FirstName;
      lname.value = snapshot.LastName;
      username.value = snapshot.UserName;
      Email.value = snapshot.email;
      phone.value = snapshot.PhoneNumber;
      birthday.value = checktime(snapshot.Birth_day);
      gen.value = snapshot.Gen;
      bio.value = snapshot.Social_data;
    });
  };
  render() {
    this.GetData();
    return (
      <div>
        <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
          <h2 id="card-title" className="card-title fw-bold text-dark">
            Personal
          </h2>
          <h6 id="card-subtitle" className="card-subtitle mb-2">
            Show me your character
          </h6>

          <div className="row d-flex mb-2 ">
            <hr className="col" />
            <div className="col-3 text-center pb-2 card-subtitle">
              Personal details
            </div>
            <hr className="col" />
          </div>

          <div className="ps-3">
            <div className="row mb-2">
              <div className="col-6">
                <div className="subtitle text-begin"> First name</div>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <div className="subtitle text-begin"> Last name</div>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                {" "}
                UserName
              </div>
              <div className="col">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                {" "}
                Email
              </div>
              <div className="col">
                <input
                  type="text"
                  name="email"
                  id="emailInput"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                {" "}
                Phone
              </div>
              <div className="col">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                Gender
              </div>
              <div className="col form-floating">
                <select
                  className="form-select"
                  aria-label="Floating label select example"
                  id="select"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="none">None</option>
                </select>
                <label>Your gender</label>
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                Birthday
              </div>
              <div className="col">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex justify-content-end">
                {" "}
                Bio
              </div>
              <div className="col">
                <textarea type="text" name="bio" id="bioS" />
              </div>
            </div>
          </div>

          <div className="d-flex mt-2 justify-content-end">
            <button
              className="btn btn-primary btn-md buttons btn-input"
              onClick={this.changeInfo}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
