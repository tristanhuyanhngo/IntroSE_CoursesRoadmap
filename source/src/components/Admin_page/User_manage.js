import "./user.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState,useEffect } from "react";
import default_avatar from "../../picture/avatar.png";
import { BiSearchAlt } from "react-icons/bi";
import User from "./User";
import { DeleteData,GetAllDataOnce,checktime } from "../../Handler/Database/Data_setup";

export default function User_manage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetAllDataOnce().then((result) => {
      if (result) {
        var Data = [];
        result.forEach((element) => {
          var stt = "inactive"
          if(element.val().Id ===localStorage.getItem("ID"))
            stt = "active"
          Data.push({
            id: element.val().Id,
            name: element.val().FirstName + " " + element.val().LastName,
            role: element.val().Role,
            status: stt,
            create: checktime(element.val().Date_create),
            avatar: element.val().avatar_url,
          });
        });
       
        setUsers(Data)
      }
    });
  }, []);

  const [state, setState] = useState({
    filter: "",
    users: users,
  });

  const lowercasedFilter = state.filter.toLowerCase();
  const filteredData = users.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
  });

  function deleteUSer(id) {
    let data = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].id != id )
        data.push(users[i])
    }
    setUsers(data)
    console.log('deleted', id)
  }

  return (
    <div className="card border-0 m-3">
      <div className="table-title p-4">
        <h2 className="card-title fw-b mb-2">User Management </h2>

        <div className="input-group d-flex align-items-center">
          <div className="form-floating">
            <input
              type="search"
              value={state.filter}
              onChange={(event) => setState({ filter: event.target.value })}
              className="form-control"
              id="floatingInput"
              placeholder=" "
            />
            <label htmlFor="floatingInput">Search</label>
          </div>
          <div className="input-group-text btn-search py-0">
            <BiSearchAlt className="icon icon-search" />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover mb-5 mx-0">
          <thead>
            <tr>
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
              <User
                className="user"
                key={user.id}
                index={index}
                id={user.id}
                avatar={user.avatar}
                name={user.name}
                create={user.create}
                role={user.role}
                status={user.status}
                onChange = {deleteUSer}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
