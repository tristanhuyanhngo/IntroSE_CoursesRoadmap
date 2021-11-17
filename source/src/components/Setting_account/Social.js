import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import facebook from '../../picture/social/facebook.png'
import instagram from '../../picture/social/instagram.png'
import google from '../../picture/social/google.png'
import github from '../../picture/social/github.png'


class Social extends Component {

    constructor(props){
        super(props);
        this.state = {
            google: 'quannguyenthanh558@gmail.com',
            github: 'https://github.com/QuanBlue',
            facebook: 'https://www.facebook.com/QuanBlueee/',
            instagram: 'https://www.instagram.com/quannbluee/'
        }

    }

    render() {
        return (
                <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
                    <h1 id ='card-title' className="card-title fw-bold text-dark">Social</h1>
                    <h6 id ='card-subtitle' className="card-subtitle mb-3">Let us know more about you</h6>
                    
                    <div className='row d-flex mb-1 '>
                    <hr className='col'/> 
                    <div className = 'col-3 text-center pb-1 card-subtitle'>Connect your social</div>
                    <hr className='col'/> 
                    </div>

                    <div className="row mb-3">
                        <div className='col'>
                            <div className ='row d-flex align-items-center'>
                                <div className='col-1'>
                                    <img className='social-icon mb-1' src={google} />
                                </div>
                                <div className='subtitle col-3 fs-4 fw-bold'>Google</div>
                            </div>
                            <input type="text" className="form-control" placeholder={this.state.google} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className='col'>
                            <div className ='row d-flex align-items-center'>
                                <div className='col-1'>
                                    <img className='social-icon mb-1' src={github} />
                                </div>
                                <div className='subtitle col-3 fs-4 fw-bold'>Github</div>
                            </div>
                            <input type="text" className="form-control" placeholder={this.state.github} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className='col'>
                            <div className ='row d-flex align-items-center'>
                                <div className='col-1'>
                                    <img className='social-icon mb-1' src={facebook} />
                                </div>
                                <div className='subtitle col-3 fs-4 fw-bold'>Facebook</div>
                            </div>
                            <input type="text" className="form-control" placeholder={this.state.facebook} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className='col'>
                            <div className ='row d-flex align-items-center'>
                                <div className='col-1'>
                                    <img className='social-icon mb-1' src={instagram} />
                                </div>
                                <div className='subtitle col-3 fs-4 fw-bold'>Instagram</div>
                            </div>
                            <input type="text" className="form-control" placeholder={this.state.instagram} />
                        </div>
                    </div>

                    <div className='d-flex mt-5 justify-content-end'>
                        <button class="btn btn-outline-danger buttons btn-sm ml-3 btn-input">CANCLE</button> 
                        <button class="btn btn-primary btn-sm buttons btn-input">SAVE</button> 
                    </div>
                </div>
        );
    }
}
export default Social;