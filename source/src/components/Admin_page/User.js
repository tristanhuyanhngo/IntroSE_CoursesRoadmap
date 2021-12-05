import "./user.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap";
import React, { useState } from "react";
import {
  BsBackspaceFill,
  BsFillGearFill,
} from "../../../node_modules/react-icons/bs";
import { UpdateRole, DeleteData } from "../../Handler/Database/Data_setup";

export default function User(props) {
  const [index, setIndex] = useState(props.index + 1);
  const [id, setId] = useState(props.id);
  const [avatar, setAvatar] = useState(props.avatar);
  const [name, setName] = useState(props.name);
  const [create, setCreate] = useState(props.create);
  const [role, setRole] = useState(props.role);
  const [status, setStatus] = useState(props.status);
  const [open, setOpen] = useState(false);

  function status_dot() {
    if (status === "active")
      return <div className="col-1 status-active">&#x25cf;</div>;
    else return <div className="col-1 status-inactive">&#x25cf;</div>;
  }

  function click_setting() {
    if (open == false) setOpen(true);
    else setOpen(false);
  }

  function set_role(id_select) {
    let sl = document.getElementById(id_select);
    let role = sl.options[sl.selectedIndex].value;
    setRole(role);
    setOpen(false)
    UpdateRole(id, role);
  }

  function render_set_role() {
    var id_select = "select " + id;
    if (open == true)
      return (
        <div className="row mt-2 pe-3" id={id}>
          <select
            className="form-select"
            id={id_select}
            value={role}
            onChange={() => set_role(id_select)}
          >
            <option value="Admin"> Admin</option>
            <option value="Sensor"> Sensor</option>
            <option value="Poster"> Poster</option>
            <option value="User"> User</option>
          </select>
        </div>
      );
  }

  // function deleteUSer() {
  //   
  // }

  function deleteUSer() {
    props.onChange(id)
    DeleteData(id)
    console.log('delete child: ', id)
  }

  function render_setting() {
    if(id === localStorage.getItem("ID") || role ==="Admin")
    {
      return (
        <td className="col">
          <div className="col">
            <div className="row">
              <button
                type="button"
                className="col-5 btn btn-secondary me-1 d-flex align-items-center justify-content-center"
                disabled
              >
                <BsFillGearFill />
              </button>
  
              <button
                type="button"
                className="col-5 btn btn-secondary delete d-flex align-items-center justify-content-center"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete"
                disabled
              >
                <BsBackspaceFill />
              </button>
            </div>
  
            {render_set_role()}
          </div>
        </td>
      );
    }
    else{
      return (
        <td className="col">
          <div className="col">
            <div className="row">
              <button
                type="button"
                className="col-5 btn btn-secondary me-1 d-flex align-items-center justify-content-center"
                onClick={() => click_setting()}
              >
                <BsFillGearFill />
              </button>
  
              <button
                type="button"
                className="col-5 btn btn-secondary delete d-flex align-items-center justify-content-center"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete"
                onClick={deleteUSer}
              >
                <BsBackspaceFill />
              </button>
            </div>
  
            {render_set_role()}
          </div>
        </td>
      );
    }
  }

  return (
    <tr>
      <td scope="row">{index}</td>
      <td className="col">
        <div className="row">
          <div className="col-2 d-flex align-items-center justify-content-center">
            <img src={avatar} className="avatar" alt="Avatar" />
          </div>
          <strong className="col"> {name}</strong>
        </div>
      </td>
      <td>{create}</td>
      <td>{role}</td>
      <td className="col">
        <div className="row d-flex align-items-center justify-content-center">
          {status_dot()}
          <div className="col">{status}</div>
        </div>
      </td>
      {render_setting()}
    </tr>
  );
}
