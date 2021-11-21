import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState }  from 'react';
import { resetPass } from '../../Handler/Authentication/Authen';
import { auth } from '../../Handler/filebase_config';

function Change_passwd() {
    if (auth.currentUser !== null)
        console.log(auth.currentUser.uid)
    const [wait,setWaiting] = useState(false)
    let mess = ""
    const oldPassword = useRef()
    const inputNewPassword = useRef()
    const inputConfirmNewPassword = useRef()
    async function changePass()
    {
        if(inputNewPassword.current.value!==null && inputConfirmNewPassword.current.value!==null)
        {
            setWaiting(true)
            if(inputNewPassword.current.value===inputConfirmNewPassword.current.value)
            {
                await resetPass(inputNewPassword.current.value)
                mess = "Done"
            }     
            else
            {
                mess = "Password dont match with the confirm password"
            }
            setWaiting(false)
        }
        else
        {
            mess = "Form is incomplete, pls fill out all fields"
        }
    }
    return (
        <div>
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
                        <input type="password" className="form-control" ref={oldPassword}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className='col'>
                        <div className='subtitle'>New password</div>
                        <input type="password" className="form-control" ref={inputNewPassword}/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className='col'>
                        <div className='subtitle'>Cofirm new password</div>
                        <input type="password" className="form-control" ref={inputConfirmNewPassword}/>
                    </div>
                </div>
                <div>
                </div>
                <div className='d-flex mt-5 justify-content-center align-items-center'>
                    <button disabled = {wait} type="submit" className="btn btn-primary buttons btn-input w-50" onClick = {changePass}>UPDATE PASSWORD</button> 
                </div>
                
            </div>
        </div>
    );
}

export default Change_passwd;