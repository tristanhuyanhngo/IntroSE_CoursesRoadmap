import '../../css/admin_page.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import avatar from '../../picture/avatar.png'


function User() {
    return (
    <tr>
        <td  scope='row'>1</td>
        <td><img src={avatar} class="avatar" alt="Avatar" /> Michael Holz</td>
        <td>04/10/2013</td>                        
        <td>Admin</td>
        <td>
            <span class="status text-success">&bull;</span> Active
        </td>
        <td>
        <button type="button" class="btn-close" aria-label="Close"></button>
            <a href="#" class="settings" title="Settings" data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE5C9;</i></a>
        </td>
    </tr>
    );
}

export default User;