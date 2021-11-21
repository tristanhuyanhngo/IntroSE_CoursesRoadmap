import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import {useRef, useState} from 'react';
import {login,useAuth,signup_login_gg} from '../../Handler/Authentication/Authen'
import { RiCreativeCommonsSaLine } from 'react-icons/ri';



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
      console.log(a)
    }
    catch{
      window.alert("error")
    }
    setWaiting(false);
  }

  async function handSignIn2()
  {
    setWaiting(true);
    await signup_login_gg();
    setWaiting(false);
  }

  return (
    <div>
      <h5 id ='title' className="card-title text-center mb-5 fw-bold text-dark">Login</h5>
      <form>
      <div className="input-group mb-3 rounded-3">
        <span className="input-group-text">
            <FontAwesomeIcon className='icon' icon={faUser} />
        </span>
        <div className="form-floating">
          <input type="email" className="form-control" ref={floatingInputEmail} placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail">Email address</label>
        </div>

      </div>

        <div className="input-group rounded-top">
          <span className="input-group-text">
            <FontAwesomeIcon className = 'icon' icon={faKey}/>
          </span>
          <div className="form-floating ">
            <input type="password" className="form-control" ref={floatingPassword} placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        
        <hr />
        <div className=" text-center d-grid mb-2">
          <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" disabled={Waiting} onClick={handSignIn} type="submit" >Login</button>
        </div>
      </form>

      <div className="text-center d-grid mb-2">
        <button className="btn btn-lg btn-google" disabled={Waiting} onClick={handSignIn2}>
          Sign in with <b>Google </b>
        </button>
      </div>
      <div className ='text-center'>
        <a href='forgotPassword.html' className=' ms-2 link-primary'>I forgot my password</a>
      </div>
    </div>
  );
}

export default Login;