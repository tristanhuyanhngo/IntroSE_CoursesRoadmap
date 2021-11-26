import './user.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import default_avatar from '../../picture/avatar.png';
import { BiSearchAlt } from 'react-icons/bi';
import User from './User';

class User_manage extends Component {

    constructor(props){
        super(props);
        this.users = [
            {
                id: 'quan',
                avatar: default_avatar,
                name: 'Nguyen Thanh Quan',
                create: '15/11/2021',
                role: 'Admin',
                status: 'active'
            },
            {
                id: 'quan2',
                avatar: default_avatar,
                name: 'Tran Duc Quan',
                create: '20/10/2021',
                role: 'Sensor',
                status: 'active'
            },
            {
                id: 'nam',
                avatar: default_avatar,
                name: 'Nguyen Duc Nam',
                create: '01/12/2021',
                role: 'User',
                status: 'inactive'
            },
            {
                id: 'anh',
                avatar: default_avatar,
                name: 'Ngo Huy Anh',
                create: '20/11/2021',
                role: 'Admin',
                status: 'inactive'
            },
            {
                id: 'khoa',
                avatar: default_avatar,
                name: 'Phung Anh Khoa',
                create: '18/11/2021',
                role: 'Sensor',
                status: 'active'
            },
            {
                id: 'nhat',
                avatar: default_avatar,
                name: 'Le Ngoc Minh Nhat',
                create: '15/11/2021',
                role: 'Poster',
                status: 'inactive'
            },
            {
                id: 'a',
                avatar: default_avatar,
                name: 'Nguyen Van A',
                create: '20/11/2021',
                role: 'User',
                status: 'active'
            },
            {
                id: 'ha',
                avatar: default_avatar,
                name: 'Nguyen Thi Khanh Ha',
                create: '30/12/2021',
                role: 'Poster',
                status: 'inactive'
            },
            {
                id: 'long',
                avatar: default_avatar,
                name: 'Nguyen Thanh Long',
                create: '02/10/2021',
                role: 'Admin',
                status: 'inactive'
            },
            {
                id: 'trang',
                avatar: default_avatar,
                name: 'Nguyen Thi Thuy Trang',
                create: '10/01/2022',
                role: 'Poster',
                status: 'active'
            },
            {
                id: 'dat',
                avatar: default_avatar,
                name: 'Nguyen Thanh Dat',
                create: '31/12/2021',
                role: 'Sensor',
                status: 'active'
            },

        ]

        this.state = {
            filter:'',
            users: this.users,
        }
    }

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const lowercasedFilter = this.state.filter.toLowerCase();
        const filteredData = this.users.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return (
            <div className="card border-0 m-3">
                <div className='table-title p-4'>
                    <h2 className='card-title fw-b mb-2'>User Management </h2>

                    <div className="input-group d-flex align-items-center">
                        <div className="form-floating">
                            <input type='search' value={this.filter} onChange={this.handleChange} className="form-control" id="floatingInput" placeholder=" " />
                            <label htmlFor="floatingInput">Search</label>
                        </div>
                        <div className="input-group-text btn-search py-0">
                            <BiSearchAlt className='icon icon-search'/>
                        </div>
                    </div>
                        
                </div >
                <div className='table-responsive'>
                    <table className="table table-striped table-hover mb-5 mx-0">
                        <thead>
                            <tr >
                                <th>#</th>
                                <th>Name</th>						
                                <th>Date Created</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                        
                            {filteredData.map((user, index) => (
                                    <User key={user.id} className='user'
                                        index = {index +1}
                                        id = {user.id}
                                        avatar = {user.avatar}
                                        name = {user.name}
                                        create = {user.create}
                                        role = {user.role}
                                        status = {user.status}
                                    />
                            ))}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default User_manage;