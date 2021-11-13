import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

function Login() {
  return (
    <div>
      <h5 id ='title' className="card-title text-center mb-5 fw-bold text-dark">Login</h5>
      <form>
      <div className="input-group mb-3 rounded-3">
        <span class="input-group-text">
            <FontAwesomeIcon className='icon' icon={faUser} />
        </span>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail">Email address</label>
        </div>

      </div>

        <div className="input-group rounded-top">
          <span class="input-group-text">
            <FontAwesomeIcon className = 'icon' icon={faKey}/>
          </span>
          <div className="form-floating ">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        
        <hr />
        
        <div className=" text-center d-grid mb-2">
          <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Login</button>
        </div>
        
      </form>
    </div>
  );
}

export default Login;