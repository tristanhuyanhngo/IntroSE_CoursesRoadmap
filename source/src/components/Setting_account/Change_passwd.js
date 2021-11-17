import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

function Change_passwd() {
    return (
            <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
                <h1 id ='card-title' className="card-title fw-bold text-dark">Change password</h1>
                <h6 id ='card-subtitle' className="card-subtitle mb-3">Want more secure?</h6>
                
                <div className='row d-flex mb-3 '>
                  <hr className='col'/> 
                  <div className = 'col-4 text-center pb-2 card-subtitle'>Change your password</div>
                  <hr className='col'/> 
                </div>
                
                <div className="row mb-3">
                    <div className='col'>
                        <div className='subtitle'>Old password</div>
                        <input type="password" className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className='col'>
                        <div className='subtitle'>New password</div>
                        <input type="password" className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className='col'>
                        <div className='subtitle'>Cofirm new password</div>
                        <input type="password" className="form-control"/>
                    </div>
                </div>

                <div className='d-flex mt-5 justify-content-center align-items-center'>
                    <button class="btn btn-primary buttons btn-input w-50">UPDATE PASSWORD</button> 
                    <a href='#' className='ms-2 link-primary'>I forgot my password</a>
                </div>
                
            </div>
    );
}

export default Change_passwd;