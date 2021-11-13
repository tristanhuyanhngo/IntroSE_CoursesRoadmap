import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import Picture_profile from './Picture_profile';
import Choose_field from './Choose_field';
import Personal from './Personal';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Setting_account() {
    return (
        <div className="container-lg">
            <div className="row mx-auto">
                <div className='col-3 col-lg-3 col-xl-3'>
                    <div className="row">
                        <Choose_field />
                    </div>
                    <div className="row">
                        <Picture_profile />
                    </div>
                </div>
                
                <div className="col-9 col-lg-9 col-xl-9">
                    <Personal />
                </div>
                
            </div>
        </div>
    );
}

export default Setting_account;