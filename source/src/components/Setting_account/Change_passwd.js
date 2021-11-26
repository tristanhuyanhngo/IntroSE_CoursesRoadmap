import "../../css/setting_account.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { resetPass, login } from "../../Handler/Authentication/Authen";
import { auth } from "../../Handler/filebase_config";

class Change_passwd extends Component {
  ResetP = () => {
    const user = auth.currentUser;
    let mess = "";
    const oldP = document.getElementById("oldPassword").value;
    const newP = document.getElementById("inputNewPassword").value;
    const confirm = document.getElementById("inputConfirmNewPassword").value;
    
    if (oldP.length <6||newP.length<6||confirm.length<6) {
      mess = "not correct";
    } 
    else {
      try {
        login(user.email, oldP);
        resetPass(newP)
        mess = "Done"
      } 
      catch {
        mess = "error";
      }
    }
    console.log(mess);
  };
  render() {
    return (
      <div>
        <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
          <h2 id="card-title" className="card-title fw-bold text-dark">
            Change password
          </h2>
          <h6 id="card-subtitle" className="card-subtitle mb-3">
            Want more secure?
          </h6>

          <div className="row d-flex mb-3 ">
            <hr className="col" />
            <div className="col-4 text-center pb-2 card-subtitle">
              Change your password
            </div>
            <hr className="col" />
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="subtitle">Old password</div>
              <input
                type="password"
                className="form-control"
                id="oldPassword"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="subtitle">New password</div>
              <input
                type="password"
                className="form-control"
                id="inputNewPassword"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="subtitle">Cofirm new password</div>
              <input
                type="password"
                className="form-control"
                id="inputConfirmNewPassword"
              />
            </div>
          </div>
          <div></div>
          <div className="d-flex mt-5 justify-content-center align-items-center">
            <button
              type="submit"
              className="btn btn-primary buttons btn-input w-50"
              onClick={this.ResetP}
            >
              UPDATE PASSWORD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Change_passwd;
