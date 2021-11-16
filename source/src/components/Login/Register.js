import '../../css/login_style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {signup} from '../../Handler/Authentication/Authen.js'
import {signup_login_gg} from '../../Handler/Authentication/Authen.js'
import {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKey } from '@fortawesome/free-solid-svg-icons'
function Register() {
    const[Waiting, setWaiting] = useState(false);

    const floatingInputEmail = useRef()
    const floatingPassword = useRef()
    const floatingPasswordConfirm = useRef()

    async function handSignUp()
    {
      const email = floatingInputEmail.current.value;
      const password = floatingPassword.current.value;
      const confirmPassword = floatingPasswordConfirm.current.value;
      setWaiting(true);

      if (email != null && password != null && confirmPassword != null) {
        if (password === confirmPassword) {
          await signup(email,password,confirmPassword)
        } 
        else {
          window.alert("Password dont match with the confirm password");
        }
      } 
      else {
        window.alert("Form is incomplete, pls fill out all fields");
      }

      setWaiting(false);
    }

    async function handSignUp2()
    {
      setWaiting(true);
      await signup_login_gg();
      setWaiting(false);
    }

    return (
        <div>
          <h5 id='title' className="card-title text-center mb-5 fw-bold text-dark">Register</h5>
          <form>

            <div className="input-group mb-3 rounded-3">
              <span class="input-group-text">
                <FontAwesomeIcon className='icon' icon={faUser} />
          
              </span>
              <div className="form-floating">
                <input type="email" className="form-control" ref={floatingInputEmail} placeholder="name@example.com" />
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>
            </div>
            <hr />

            <div className="input-group rounded-top mb-3">
              <span class="input-group-text">
                <FontAwesomeIcon className = 'icon' icon={faKey}/>
              </span>

              <span className ='config-width'>
                <div className="form-floating full">
                  <input type="password" className="form-control" ref={floatingPassword} placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                  <div className='form-floating full'>
                    <input type="password" className="form-control hi" ref={floatingPasswordConfirm} placeholder="Confirm Password" />
                    <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                  </div>
                {/* </div> */}
                {/* <div className="form-floating"> */}
                  
                {/* </div> */}
              </span>

            </div>
            <div className=" text-center d-grid mb-2">
              <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" disabled={Waiting} type="submit" onClick={handSignUp}>Register</button>
            </div>
            <hr className="my-4" />

          </form>
          <div className="text-center d-grid mb-2">
              <button className="btn btn-lg btn-google"  disabled={Waiting} onClick={handSignUp2}>
                Sign up with <b>Google </b>
              </button>
            </div>
        </div>
    );
}

export default Register;