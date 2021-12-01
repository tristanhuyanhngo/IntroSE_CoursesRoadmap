import './login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import React from 'react';
import {useRef, useState} from 'react';
import {login,signup_login_gg} from '../../Handler/Authentication/Authen'
import { BiUser, BiKey } from 'react-icons/bi';

function Login() {
  const[Waiting, setWaiting] = useState(false);
  const floatingInputEmail = useRef()
  const floatingPassword = useRef()

  async function handSignIn()
  {
    const email = floatingInputEmail.current.value
    const pass = floatingPassword.current.value
    setWaiting(true);
    try{
      const a = await login(email,pass);
      localStorage.setItem('EMAIl',a.user.email)
      localStorage.setItem('ID',a.user.uid)
    }
    catch{
      window.alert("error")
    }
    setWaiting(false);
  }

  async function handSignIn2()
  {
    setWaiting(true);
    const a = await signup_login_gg();
    localStorage.setItem('EMAIl',a.email)
    localStorage.setItem('ID',a.uid)
    setWaiting(false);
  }

  return (
      <div>
        <h2 id ='title' className="card-title text-center mb-5 fw-bold text-dark">Login</h2>
        <form>
          <div className="input-group mb-3 mx-1 row">
            <div className="input-group-text py-0 col-2">
                <BiUser className=' icon' />
            </div>
            <div className="form-floating p-0 col">
              <input type="email" className="form-control" ref={floatingInputEmail} placeholder="name@example.com" />
              <label htmlFor="floatingInputEmail">Email address</label>
            </div>
          </div>

          <div className="input-group mx-1 row">
            <div className="input-group-text py-0 col-2">
              <BiKey className='icon' />
            </div>
            <div className="form-floating p-0 col">
              <input type="password" className="form-control" ref={floatingPassword} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>
          
          <hr />
          <div className=" text-center d-grid mb-2">
            <button className="btn btn-md btn-primary btn-login fw-bold text-uppercase" disabled={Waiting} onClick={handSignIn} type="submit" >Login</button>
          </div>
        </form>

        <div className="text-center d-grid mb-5-login">
          <button className="btn btn-md btn-google" disabled={Waiting} onClick={handSignIn2}>
            Sign in with <b>Google </b>
          </button>
        </div>
        
    </div>
  );
}

export default Login;