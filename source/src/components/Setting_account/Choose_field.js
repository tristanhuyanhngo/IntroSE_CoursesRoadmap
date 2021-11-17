import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import ListGroup from '../../../node_modules/react-bootstrap/ListGroup'

// function navigate(id){

//     var list=['personal', 'ch_passwd', 'social']
//     console.log('hi',id);
//     document.getElementById(id).style['background'] = '#0d6efd';
//     document.getElementById(id).style['color'] = 'white';

//     for (let i = 0; i < 3; i ++) {
//         if (list[i] != id ){
//             document.getElementById(list[i]).style['background'] = 'white';
//             document.getElementById(list[i]).style['color'] = 'black';
//             document.getElementById(list[i]).style['border-color'] = 'lightgray';
//         }
//     }

//     console.log('painted');

// }


function Choose_field(props) {
    return (
        <div className="card flex-col p-3 border-0 shadow rounded-3">
            <h3 id ='card-title' className="card-title fw-bold text-dark">Settings</h3>
            <h6 id ='card-subtitle' className="card-subtitle mb-3">Customize your information</h6>

            <ListGroup >
                <ListGroup.Item action id='personal' active onClick={props.navigate}>Personal</ListGroup.Item>
                <ListGroup.Item action id='ch_passwd' onClick={props.navigate}>Change password</ListGroup.Item>
                <ListGroup.Item action id='social' onClick={props.navigate}  >Social</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Choose_field;