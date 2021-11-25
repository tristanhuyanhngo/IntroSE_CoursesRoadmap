import React, { Component } from 'react';
import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BiUser } from 'react-icons/bi';
import { forgotPass } from '../../Handler/Authentication/Authen';


class Forgot_btn extends Component {
    constructor(props){
        super(props);
        this.state = {
            btn_status: 'forgot'
        }
    }

    alert_announce = () => {
        alert('Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.')
    }
    btnClick=() =>{
        if (this.state.btn_status == 'forgot')
        {
            this.setState({btn_status:'confirm'})
            const email  = document.getElementById("inputEmaiL")
            if(email.value!==null)
                forgotPass(email.value)
        }
            
        else
            this.setState({btn_status:'forgot'})
    }
    
    close =() =>{
        this.setState({btn_status:'forgot'})
    }

    render_button = () =>{
        // console.log(this.state.btn_status)
        if (this.state.btn_status == 'forgot')
            return <button type="button" className="btn btn-success" onClick={this.btnClick}>Send password reset email</button>
        else 
            return <button type="button" className="btn btn-success" data-bs-dismiss="modal"  onClick={this.btnClick}>I get it</button>
    }

    render_body=()=>{
        if (this.state.btn_status == 'forgot') 
        return (
            <div>
                <div className='py-3 text-start'>
                    Enter your user account's verified email address and we will send you a password reset link.
                </div>
                <div className="input-group mb-4 mx-1 round-bottom row">
                    <div className="input-group-text py-0 col-2">
                        <BiUser className=' icon' />
                    </div>
                    <div className="form-floating p-0 col">
                        <input type="email" className="form-control" id = "inputEmaiL"  placeholder="name@example.com" />
                        <label htmlFor="floatingInputEmail">Email address</label>
                    </div>
                </div>
            </div>
        )
        else return (
            <div className='text-start mb-4'>
                Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.
            </div>
        )

    }

    render() {
        return (
            <div>
                <div className ='text-center'>
                    <button className='btn ms-2 btn-success shadow' data-bs-toggle="modal" data-bs-target="#staticBackdrop">I forgot my password</button>
                </div>

                {/* Modal */}
                <div className="modal hide fade in" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content m-3">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel" >Reset your password</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        { this.render_body() }
                    {/* </div> */}
                    {/* <div className="modal-footer"> */}
                         { this.render_button() }
                        {/* <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={this.alert_announce}>Send password reset email</button> */}
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        );
    }
}

export default Forgot_btn;