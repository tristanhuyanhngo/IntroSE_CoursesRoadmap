import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

class Picture_profile extends Component {
    state = {
        profileImg:"https://i.imgur.com/G1pXs7D.jpg"
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
        const defaultBtn = document.querySelector("#picture-profile");
        defaultBtn.click()
      }
      
      delete = ()=>{
        this.setState({profileImg:"https://i.imgur.com/G1pXs7D.jpg"})
      }
    
    render()
    {
        const {profileImg} = this.state
        return (
            <div className="card flex-col p-3 border-0 shadow rounded-3">
               <h3 id ='card-title' className="card-title text-center fw-bold text-dark">My profile picture</h3>
               <div className="p-2 text-center"> 
                    <img className = 'my-2 ' src={profileImg} />
                    <input id = "picture-profile" hidden type = "file"  accept=".png, .jpg, .jpeg" onChange = {this.imageHandler} />
                        <button className="btn btn-primary btn-sm buttons" onClick={this.uploadImg}>Upload new photo</button> 
                        <button className="btn btn-outline-danger buttons btn-sm ml-3" onClick = {this.delete}>Remove</button> 
                    <h6 className="card-subtitle mt-2 image-size">Image format with max size of 3MB</h6>
    
                </div>
            </div>
        );
    }

}

export default Picture_profile;