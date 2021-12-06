import "./setting_account.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { downloadAvatar,uploadAvatar} from "../../Handler/Storage/StorageHandler";
import React, { Component} from "react";
import { getPicture } from "../../Handler/Database/Data_setup";

class Picture_profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    profileImg:
      localStorage.getItem("imgUrl") ?? "https://i.imgur.com/G1pXs7D.jpg",
  };

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    uploadAvatar(localStorage.getItem("ID"));
  };

  uploadImg = () => {
    const defaultBtn = document.querySelector("#picture-profile");
    defaultBtn.click();
  };

  delete = () => {
    this.setState({ profileImg: "https://i.imgur.com/G1pXs7D.jpg" });
  };

  render() {
    downloadAvatar(getPicture(localStorage.getItem("ID")))
    const { profileImg } = this.state;
    return (
      <div className="card flex-col p-2 px-3 border shadow rounded-3">
        <h4
          id="card-title"
          className="card-title text-center fw-bold text-dark"
        >
          My profile picture
        </h4>
        <div className="row p-2 pt-3 d-flex justify-content-center text-center">
          <div className="col">
            <img className="avt-setting" id="Avatar_Image" src={profileImg} />
            <input
              id="picture-profile"
              hidden
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={this.imageHandler}
            />
          </div>

          <div className="col col-sm-12 mt-2 d-flex flex-column justify-content-center">
            <div className="row">
              <button
                className="col btn btn-primary btn-sm buttons"
                onClick={this.uploadImg}
              >
                Upload new photo
              </button>
              <button
                className="col btn btn-outline-danger buttons btn-sm ml-3"
                onClick={this.delete}
              >
                Remove
              </button>
            </div>
            <h6 className="row card-subtitle mt-2 image-size ">
              Image format with max size of 3MB
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Picture_profile;
