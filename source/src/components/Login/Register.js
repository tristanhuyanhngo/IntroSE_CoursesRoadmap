// import logo from './logo.svg';
import '../../css/login_style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch_log from './Switch_log';
import {signup} from '../authentication/startup'
import {useRef, useState} from 'react';

function Register() {
    const[Waiting, setWaiting] = useState(false);
    const floatingInputEmail = useRef()
    const floatingPassword = useRef()
    const floatingPasswordConfirm = useRef()

    async function handSignUp()
    {
      setWaiting(true);
      await signup(floatingInputEmail.current.value,floatingPassword.current.value,floatingPasswordConfirm.current.value)
      setWaiting(false);
    }

    return (
        <div className="card-body">
                <h5 className="card-title text-center mb-5 font-weight-bold fs-1">Register</h5>
                <form>

                  <div className="input-group mb-3 rounded-3">
                    <span className="icon fas fa-envelope" />
                    <div className="form-floating">
                      <input type="email" className="form-control" ref={floatingInputEmail} placeholder="name@example.com" />
                      <label htmlFor="floatingInputEmail">Email address</label>
                    </div>
                  </div>
                  <hr />
                  <div className="input-group rounded-top">
                    <span className="icon fas fa-key" />
                    <div className="form-floating ">
                      <input type="password" className="form-control" ref={floatingPassword} placeholder="Password" />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>
                  <div className="input-group mb-4 rounded-bottom">
                    <div className="icon" />
                    <div className="form-floating hi">
                      <input type="password" className="form-control hi" ref={floatingPasswordConfirm} placeholder="Confirm Password" />
                      <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                    </div>
                  </div>
                  <div className=" text-center d-grid mb-2">
                    <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" disabled={Waiting} type="submit" onClick={handSignUp}>Register</button>
                  </div>
                  <hr className="my-4" />
                  <div className="text-center d-grid mb-2">
                    <button className="btn btn-lg btn-google" type="submit" onClick={Switch_log()}>
                      <i className="fab fa-google me-2" /> Sign up with <b>Google</b>
                    </button>
                  </div>
                </form>
              </div>
    );
}

export default Register;