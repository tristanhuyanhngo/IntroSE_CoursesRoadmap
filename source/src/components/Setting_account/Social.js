import "../../css/setting_account.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useRef } from "react";
import facebook from "../../picture/social/facebook.png";
import instagram from "../../picture/social/instagram.png";
import google from "../../picture/social/google.png";
import github from "../../picture/social/github.png";
import { InsertSocial,SelectSocial } from "../../Handler/Database/Data_setup";

class Social extends Component {
  render() {
    SelectSocial()
    return (
      <div>
        <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
          <h2 id="card-title" className="card-title fw-bold text-dark">
            Social
          </h2>
          <h6 id="card-subtitle" className="card-subtitle mb-3">
            Let us know more about you
          </h6>

          <div className="row d-flex mb-1 ">
            <hr className="col" />
            <div className="col-4 text-center pb-1 card-subtitle">
              Connect your social
            </div>
            <hr className="col" />
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <img className="social-icon mb-1" src={google} />
                </div>
                <div className="subtitle col fs-5 fw-bold">Google</div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="coursearch@gmail.com"
                id="googleID"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <img className="social-icon mb-1" src={github} />
                </div>
                <div className="subtitle col fs-5 fw-bold">Github</div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="https://github.com/coursearch"
                id="githubID"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <img className="social-icon mb-1" src={facebook} />
                </div>
                <div className="subtitle col fs-5 fw-bold">Facebook</div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="https://www.facebook.com/coursearch/"
                id="facebookID"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="row d-flex align-items-center">
                <div className="col-1">
                  <img className="social-icon mb-1" src={instagram} />
                </div>
                <div className="subtitle col fs-5 fw-bold">Instagram</div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="https://www.instagram.com/coursearch/"
                id="instagramID"
              />
            </div>
          </div>

          <div className="d-flex mt-3 justify-content-end">
            <button className="btn btn-outline-danger btn-social btn-sm"onClick={SelectSocial}>
              CANCLE
            </button>
            <button className="btn btn-primary btn-sm btn-social" onClick={InsertSocial}>SAVE</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Social;
