import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

function Personal() {
    return (
            <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
                <h1 id ='card-title' className="card-title fw-bold text-dark">Personal</h1>
                <h6 id ='card-subtitle' className="card-subtitle mb-3">Show me your character</h6>
                
                <div className='row d-flex mb-3 '>
                  <hr className='col'/> 
                  <div className = 'col-3 text-center pb-2 card-subtitle'>Personal details</div>
                  <hr className='col'/> 
                </div>

                <div className="row mb-3">
                    <div className='col-6'>
                      <div className='subtitle text-begin'> First name</div>
                      <input type="text" name='fname' className="form-control" id="floatingInputFname"/>
                    </div>
                    <div className='col-6'>
                      <div className='subtitle text-begin'> Last name</div>
                      <input type="text" name='lname' className="form-control" id="floatingInputFname"/>
                    </div>
                  </div>
                
                <div className="row mb-3">
                  <div className='subtitle col-2 d-flex align-items-center justify-content-end'> Username</div>
                  <div className='col'>
                    <input type="text" name='username' className="form-control" id="floatingInputFname"/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className='subtitle col-2 d-flex align-items-center justify-content-end'> Email</div>
                  <div className='col'>
                    <input type="text" name='email' className="form-control" id="floatingInputFname"/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className='subtitle col-2 d-flex align-items-center justify-content-end'>Gender</div>
                  <div className="col form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="none">None</option>
                    </select>
                    <label>Your gender</label>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className='subtitle col-2 d-flex align-items-center justify-content-end'>Birthday</div>
                  <div className="col">
                    <input type="date" name='birthday' className="form-control" id="floatingInputBirthday"/>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className='subtitle col-2 d-flex justify-content-end'> Bio</div>
                  <div className='col'>
                    <textarea type="text" name='bio'/>
                  </div>
                </div>

                <div className='d-flex mt-5 justify-content-end'>
                    <button class="btn btn-outline-danger buttons btn-sm ml-3 btn-input">CANCLE</button> 
                    <button class="btn btn-primary btn-sm buttons btn-input">SAVE</button> 
                </div>
            </div>
    );
}

export default Personal;