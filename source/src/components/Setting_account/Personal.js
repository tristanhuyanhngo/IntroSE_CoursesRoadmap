import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

function Personal() {
    return (
            <div className="card flex-col p-4 border-0 shadow rounded-3 card-input">
                <h1 id ='card-title' className="card-title text-center fw-bold text-dark">My profile picture</h1>
                <h6 id ='card-subtitle' className="card-subtitle text-center ">Show me your character</h6>
                <div className="form-group">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control mb-1" value="nmaxwell" />
                </div>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" value="Nelle Maxwell" />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input type="text" className="form-control mb-1" value="nmaxwell@mail.com" />
                  <div className="alert alert-warning mt-3">
                    Your email is not confirmed. Please check your inbox.<br />
                    <a href="javascript:void(0)">Resend confirmation</a>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input type="text" className="form-control" value="Company Ltd." />
                </div>
                <button class="btn btn-primary btn-sm buttons">Save</button> 
            </div>
    );
}

export default Personal;