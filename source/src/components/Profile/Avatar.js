import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Avatar() {
    return (
      <div className="container">
        <div className="flex-col">
          <div className="row d-flex justify-content-start">
            <div className="col">
              <img
                className="avt-setting shadow-lg"
                data-holder-rendered="true"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              />
              <input
                id="picture-profile"
                hidden
                type="file"
                accept=".png, .jpg, .jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    );
}