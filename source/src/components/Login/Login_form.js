import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import {useRef, useState} from 'react';
import signin from '../authentication/login'
function Login() {
  // biến để chờ thực hiện xong sign in mới cho làm tiếp 
  const[Waiting, setWaiting] = useState(false);
  // gồm có 2 giá trị nhận vào là email, password
  const floatingInputEmail = useRef()
  const floatingPassword = useRef()

  async function handSignIn()
  {
    const email = floatingInputEmail.current.value
    const pass = floatingPassword.current.value
    setWaiting(true);
    if (email != null && pass != null) {
      let uid  = await signin(email,pass)
      window.alert(uid)
    } 
    else {
    window.alert("Form is incomplete, pls fill out all fields");
    }
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
          <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" disabled={Waiting} onClick={handSignIn} type="submit">Login</button>
        </div>
        <div className="text-center d-grid mb-2">
              <button className="btn btn-lg btn-google" disabled={Waiting} type="submit" >
                Sign in with <b>Google </b>
              </button>
        </div>
      </form>
    </div>
  );
}

export default Login;