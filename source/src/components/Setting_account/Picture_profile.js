import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';

function Picture_profile() {
    return (
        <div className="card  flex-col border-0 shadow rounded-3">
           <div class="p-2 text-center"> 
                <img className = 'mb-2 mt-1' src="https://i.imgur.com/G1pXs7D.jpg" />
                <div class="text-center">
                    <div class="text-center"> 
                        <button class="btn btn-primary btn-sm buttons">Upload new photo</button> 
                        <button class="btn btn-outline-danger buttons btn-sm ml-3">Remove</button> 
                    </div> 
                </div>
                <h6 class="card-subtitle mt-2 image-size">Image format with max size of 3MB</h6>

            </div>
        </div>
    );
}

export default Picture_profile;