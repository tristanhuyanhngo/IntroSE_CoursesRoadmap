import React, { Component }  from 'react';
import '../../css/login_style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Card_img(props) {
    return (
        <div className="card-img-left d-none d-md-flex">
          {/* Background image for card set in CSS! */}
          <h1 id="title" className="mt-5 fs-1 text-center">
            { props.title }
          </h1>

          <p id="intro">
            { props.intro }
          </p>

          <p id="question">
            { props.question }
            click button below            
          </p>
          
          <button id = 'btn1' className="btn btn-lg btn-secondary mx-5 mb-5" onClick={props.btnClick}> {props.status }</button>
        </div>
    );
}

export default Card_img;