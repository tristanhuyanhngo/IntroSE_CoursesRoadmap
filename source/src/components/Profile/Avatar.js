import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { downloadAvatar } from '../../Handler/Storage/StorageHandler'

export default function Avatar() {
  downloadAvatar('001');
  return (
    <div className="container">
      <div className="flex-col">
        <div className="row d-flex justify-content-start">
          <div className="col">
            <img
              className="avt-setting shadow-lg"
              data-holder-rendered="true"
              src={
                localStorage.getItem("imgUrl") ?? "https://i.imgur.com/G1pXs7D.jpg"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
