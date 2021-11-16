import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

function Choose_field() {
    return (
        <div className="card flex-col p-3 border-0 shadow rounded-3">
            <h3 id ='card-title' className="card-title fw-bold text-dark">Settings</h3>
            <h6 id ='card-subtitle' className="card-subtitle mb-3">Customize your information</h6>
            <div class="list-group list-group-flush account-settings-links">
                <a class="list-group-item list-group-item-action active" data-toggle="list" href="#account-personal">Personal</a>
                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
                <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>

            </div>
        </div>
    );
}

export default Choose_field;