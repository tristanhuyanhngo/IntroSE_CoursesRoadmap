import '../../css/user.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import React, { Component }  from 'react';
import { BsBackspaceFill,BsFillGearFill } from '../../../node_modules/react-icons/bs';
//import { auth } from '../../Handler/filebase_config';


class User extends Component { 
    constructor(props){
        super(props);
        this.state = {
            props,
            key: props.id,
            index: props.index + 1,
            id: props.id,
            avatar: props.avatar,
            name: props.name,
            create: props.create,
            role: props.role,
            status: props.status,
            open: false
        }
    }

    status_dot = (status) => {
        if (status === 'active')
            return <div className="col-1 status-active">&#x25cf;</div>  
        else
            return <div className="col-1 status-inactive">&#x25cf;</div> 
        }

    click_setting = () => {
        console.log('click_setting:', this.open)
        if (this.state.open == false)
            this.setState({open:true})
        else
            this.setState({open:false})
        
    }

    render_set_role =() =>{
        var id_select = 'select' + this.state.id
        console.log('click:', id_select,'- open:',this.state.open)

        if (this.state.open == true)
            return (
                <div className="row mt-2 pe-3" id={this.state.id}>
                    <select className="form-select" id={id_select} onChange={()=>this.set_role(id_select)}>
                        <option value="Admin"> Admin</option>
                        <option value="Sensor"> Sensor</option>
                        <option value="Poster"> Poster</option>
                        <option value="User"> User</option>
                    </select>
                </div>
            );
    }

    set_role = (id_select) =>{
        let sl = document.getElementById(id_select)
        let role = sl.options[sl.selectedIndex].value
        this.setState({role:role})
        console.log('set role:', role)
    }

    render() {
        var id1 = '#' + this.state.id
        
        console.log(id1)

        return (
        <tr>
            <td  scope='row'>{this.state.index}</td>
            <td className = 'col'>
                <div className='row'>
                    <div className='col-2 d-flex align-items-center justify-content-center'>
                        <img src={this.state.avatar} className="avatar" alt="Avatar" />
                    </div>
                    <strong className='col'> {this.state.name}</strong>
                </div>
            </td>
            <td>{this.state.create}</td>                        
            <td>{this.state.role}</td>
            <td className='col'>
                <div className='row d-flex align-items-center justify-content-center'>
                    { this.status_dot(this.state.status)}
                    <div className='col'>{this.state.status}</div>
                </div>
            </td>
            <td className='col'>
                <div className='col'>
                    <div className='row'>
                        <button type="button" className="col-5 btn btn-secondary me-1 d-flex align-items-center justify-content-center" 
                        onClick={()=>this.click_setting()}>
                            <BsFillGearFill/>
                        </button>
                        
                        <button type="button" className="col-5 btn btn-secondary delete d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                            <BsBackspaceFill/>
                        </button>
                    </div>
                
                    {this.render_set_role()}
                </div>
                
            </td>
        </tr>
        );
    }
}
export default User;