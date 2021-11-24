import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import Picture_profile from './Picture_profile';
import Personal from './Personal';
import Change_passwd from './Change_passwd';
import Social from './Social';


class Setting_account extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: 'personal'
        }
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                <div className="container-lg mt-5 ">
                    <div className="card flex-col p-0 border-0 shadow rounded-3">
                        <h1 id ='card-title' className="card-title ms-3 mt-2 fw-bold text-dark">Settings</h1>
                        <h6 id ='card-subtitle' className="card-subtitle ms-3 mb-3">Customize your information</h6>

                        <div className='row'>
                            {/* Picture */}
                            <div className="picture_profile mb-3 ms-3 mt-3 pt-4 col-11 col-sm-4 col-lg-3">
                                <Picture_profile />
                            </div>

                            <div className='col mb-3 me-3'>
                                {/* Navigate */}
                                <ul className="nav nav-tabs" id='myTab' role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button class="nav-link active" id="personal-tab" data-bs-toggle="tab" data-bs-target="#personal" type="button" role="tab" aria-controls="personal" aria-selected="true">Personal</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button class="nav-link" id="ch_passwd-tab" data-bs-toggle="tab" data-bs-target="#ch_passwd" type="button" role="tab" aria-controls="ch_passwd" aria-selected="false">Security</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button class="nav-link" id="social-tab" data-bs-toggle="tab" data-bs-target="#social" type="button" role="tab" aria-controls="social" aria-selected="false">Social</button>
                                    </li>
                                </ul>   

                                {/* Navigate control */}
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                                        <Personal />
                                    </div>
                                    <div class="tab-pane fade" id="ch_passwd" role="tabpanel" aria-labelledby="ch_passwd-tab">
                                        <Change_passwd />
                                    </div>
                                    <div class="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting_account;