import "../../css/create_info.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import avatar_png from '../../picture/avatar.png'
import { auth } from '../../Handler/filebase_config';
import { InsertData } from "../../Handler/Database/Data_setup";

class Create_info extends Component {
  state = {
    profileImg:avatar_png
  }

  imageHandler = (e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
      if(reader.readyState===2)
      {
        this.setState({profileImg:reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  uploadImg =()=>
  {
    const defaultBtn = document.querySelector("#default-btn")
    defaultBtn.click()
  }

  delete = ()=>{
    this.setState({profileImg:avatar_png})
  }

  saveInfor = ()=>{
    let id = null
    if(auth.currentUser!==null)
      id = auth.currentUser.uid
      else
      {
        id = "lcKFYNnv6XdRcYzoIqYLv3CIQ1e2"
      }
    const Fname = document.getElementById("floatingInputFname").value
    const Lname = document.getElementById("floatingInputLname").value
    const Uname = document.getElementById("floatingInputUsername").value 
    const Phone = document.getElementById("floatingInputPhoneNum").value 
    const Gender = document.getElementById("floatingSelect").value 
    const Birthday = document.getElementById("floatingInputBirthday").value 
    const Social = document.getElementById("floatingInputSocial").value 
    InsertData(id,Fname,Lname,Uname,Phone,Gender,Birthday,Social)
  }
  render()
  {
    const {profileImg} = this.state
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden main_area">
                <div className="card-body">
                  <h1 className="card-title fw-bold">Personal Details Information</h1> 
                    <div className="mt-3"> 
                      <h6 className="card-subtitle text-muted">Create your personal information</h6>                      
                    </div>

                  <div className="mt-3">
                      <div className="row mb-3">
                          <div className="col-md-6 form-floating">
                            <input type="text" name='fname' className="form-control" id="floatingInputFname" placeholder="Nguyen" />
                            <label htmlFor="floatingInputFname">First name</label>
                          </div>
                          
                          <div className="col-md-6 form-floating">
                            <input type="text" name='lname' className="form-control" id="floatingInputLname" placeholder="Van A" />
                            <label htmlFor="floatingInputLname">Last name</label>
                          </div>
                      </div>

                      <div className="row mb-3 pe-4">
                        <div className="form-floating">
                          <input type="text" name='username' className="form-control" id="floatingInputUsername" placeholder="@A-pro-123" />
                          <label htmlFor="floatingInputUsername">User name</label>
                        </div>
                      </div>

                      <div className="row mb-2">
                          <div className = 'col-md-9'>
                            <div className="row mb-3">
                              <div className="form-floating">
                                <input type="tel" name='phoneNumber' className="form-control" id="floatingInputPhoneNum" placeholder="0912345678" />
                                <label htmlFor="floatingInputPhoneNum">Phone number</label>
                              </div>
                            </div>

                            <div className="row mb-3 pe-4">
                              <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                                <label htmlFor="floatingSelect">Gender</label>
                              </div>
                            </div>

                            <div className="row mb-3 pe-4">
                              <div className="form-floating">
                                <input type="date" name='birthday' className="form-control" id="floatingInputBirthday"/>
                                <label htmlFor="floatingInputBirthday">Birthday</label>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="form-floating">
                                <input type="url" name='socialUrl' className="form-control" id="floatingInputSocial" placeholder="0912345678" />
                                <label htmlFor="floatingInputSocial">Social</label>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex align-items-center justify-content-center col-md-3'>
                            <div className="p-2 text-center">
                                <img className='mb-3' src={profileImg} />
                                <div className="text-center">
                                    <div className="text-center"> 
                                      <input id = "default-btn" hidden type = "file"  accept=".png, .jpg, .jpeg" onChange = {this.imageHandler} />
                                      <button id = "custom-btn" className="btn btn-primary btn-sm buttons" onClick={this.uploadImg}>Upload new photo</button> 
                                      <button type = "submit" className="btn btn-outline-danger buttons btn-sm ml-3" onClick = {this.delete} >Remove</button>
                                    </div> 
                                </div>
                                <h6 className="card-subtitle mt-2 image-size">Image format with max size of 3MB</h6>

                            </div>
                          </div>
                     </div>
                  </div>
                  
                  <div className=" text-center d-grid mb-2">
                    <button id="save" className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit" onClick={this.saveInfor}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Create_info;
