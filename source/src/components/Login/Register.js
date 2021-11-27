import './login_style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {signup} from '../../Handler/Authentication/Authen.js'
import {signup_login_gg} from '../../Handler/Authentication/Authen.js'
import {useRef, useState} from 'react';
import { BiUser, BiKey } from 'react-icons/bi';

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

            <div className="input-group mb-3 mx-1 round-bottom row">
              <div className="input-group-text py-0 col-2">
                  <BiUser className=' icon' />
              </div>
              <div className="form-floating p-0 col">
                <input type="email" className="form-control" ref={floatingInputEmail} placeholder="name@example.com" />
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>
            </div>

            <div className="row input-group mx-1 rounded-top mb-3">
              <div className="col-2 py-0 input-group-text">
                <BiKey className = 'icon'/>
              </div>
              <div className ='col px-0'>
                <div className=" form-floating full">
                  <input type="password" className="form-control" ref={floatingPassword} placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                  <div className='p-0 form-floating full'>
                    <input type="password" className="form-control hi" ref={floatingPasswordConfirm} placeholder="Confirm Password" />
                    <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                  </div>
              </div>
            </div>

            <div className=" text-center d-grid">
              <button className="btn btn-md btn-primary btn-login fw-bold text-uppercase" disabled={Waiting} type="submit" onClick={handSignUp}>Register</button>
            </div>

            <div className='d-flex justify-content-center'>
              <hr className='my-2 w-75'/>
            </div>

          </form>
          <div className="text-center d-grid mb-5">
              <button className="btn btn-md btn-google"  disabled={Waiting} onClick={handSignUp2}>
                Sign up with <b>Google </b>
              </button>
            </div>
        </div>
    );
}

export default Register;