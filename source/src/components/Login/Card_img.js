import React from 'react';
import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Card_img(props) {
    return (
        <div className="card-img-left ">
          {/* Background image for card set in CSS! */}
          <h1 id="title" className="mt-5 text-center">
            { props.title }
          </h1>

          <p className="intro">
            { props.intro }
          </p>
          
          <button id='btn1' className="btn btn-md btn-secondary mb-5" onClick={props.btnClick}> {props.status }</button>
        </div>
    );
}

export default Card_img;