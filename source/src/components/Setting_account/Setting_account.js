import '../../css/setting_account.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ListGroup from '../../../node_modules/react-bootstrap/ListGroup'
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

    BtnClick = () => {

    }

    Switch_component = () => {
        if (this.state.status === 'personal')
            return <Personal />

            else if (this.state.status === 'ch_passwd')
            return <Change_passwd />

            return <Social />
    }

    coloring = () => {

        let list=['personal', 'ch_passwd', 'social']

        document.getElementById(this.state.status).style['background'] = '#0d6efd';
        document.getElementById(this.state.status).style['color'] = 'white';
    
        for (let i = 0; i < 3; i ++) {
            if (list[i] !== this.state.status){
                document.getElementById(list[i]).style['background'] = 'white';
                document.getElementById(list[i]).style['color'] = 'black';
                document.getElementById(list[i]).style['border-color'] = 'lightgray';
            }
        }

    }

    navigate = (status) => {
        this.setState({status:status}, () => {
            // console.log(this.state.status);
            this.coloring()
            this.Switch_component()
            }
        ); 
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row mx-auto">
                    <div className='col-3 col-lg-3 col-xl-3'>
                        <div className="row choose_field">
                            <div className="card flex-col p-3 border-0 shadow rounded-3">
                                <h3 id ='card-title' className="card-title fw-bold text-dark">Settings</h3>
                                <h6 id ='card-subtitle' className="card-subtitle mb-3">Customize your information</h6>
                                <ListGroup >
                                    <ListGroup.Item action id='personal' active onClick={()=>{this.navigate('personal')}}>Personal</ListGroup.Item>
                                    <ListGroup.Item action id='ch_passwd' onClick={ ()=>{this.navigate('ch_passwd')}}>Change password</ListGroup.Item>
                                    <ListGroup.Item action id='social' onClick={()=>{this.navigate('social')}}  >Social</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>

                        <div className="row picture_profile mt-2">
                            <Picture_profile />
                        </div>
                    </div>
                    
                    <div className="col-9 col-lg-9 col-xl-9 input-info">
                            {this.Switch_component()}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Setting_account;