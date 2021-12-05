import "./course_admin.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {UpdateCourse} from "../../Handler/Database/Data_setup";
export default function Course_admin(props) {
  const [id, setID] = useState(props.id);
  const [name, setName] = useState(props.name);
  const [level, setLevel] = useState(props.level);
  const [num_lesson, setNumLesson] = useState(props.num_lesson);
  const [descript, setDescript] = useState(props.descript);
  const [catalog, setCatalog] = useState(props.catalog);
  const [url, setUrl] = useState(props.source);
  const [open, setOpen] = useState(false);

  function save() {
    let Name = document.getElementById(id + "name").value;
    let Level = document.getElementById(id + "level").value;
    let Catalog = document.getElementById(id + "catalog").value;
    let Descript = document.getElementById(id + "descript").value;
    let Url = document.getElementById(id + "url").value;
    let NumLesson = document.getElementById(id + "num_lesson").value;
    console.log('num:', NumLesson)
    if(Name ==="")
      Name = name
    if(Descript ==="")
      Descript = descript
    if(Url ==="")
      Url = url
    if (NumLesson ==="")
      NumLesson = num_lesson
    UpdateCourse(id,Name,Level,num_lesson,Catalog,Descript,Url)
    setName(Name)
    setLevel(Level)
    setNumLesson(NumLesson)
    setDescript(Descript)
    setCatalog(Catalog)
    setUrl(Url)
  }

  function btn_edit() {
    if (open == false) setOpen(true);
    else setOpen(false);
  }

  function set_level(id_select) {
    let sl = document.getElementById(id_select);
    let s = sl.options[sl.selectedIndex].value;
    setLevel(s)
  }

  function set_catalog(id_select) {
    let sl = document.getElementById(id_select);
    let s = sl.options[sl.selectedIndex].value;
    setCatalog(s)
  }

  function render_edit_container() {
    if (open == true)
      return (
        <div className="mt-2 edit-site col-md-8" id={id}>
          <div className="card flex-col px-2 shadow rounded-3">
            <h1 id="card-title" className="ps-2 pt-2 card-title fw-bold text-dark">
              Edit course
            </h1>

            <div className="row mb-2 pe-3">
              <div className="subtitle col-2 pe-0 d-flex align-items-center justify-content-end">
                {" "}
                Name
              </div>
              <div className="col">
                <input
                  id={id + "name"}
                  type="text"
                  name="coursename"
                  className="form-control"
                  placeholder={name}
                />
              </div>
            </div>

            <div className="row mb-2 pe-3">
              <div className="subtitle col-2 pe-0 d-flex align-items-center justify-content-end">
                Level
              </div>
              <div className="col form-floating">
                <select
                  id={id + "level"}
                  className="form-select"
                  aria-label="Floating label select example"
                  value={level}
                  onChange={() => set_level(id+"level")}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <label>Course level</label>
              </div>
            </div>

            <div className="row mb-2 pe-3">
              <div className="subtitle col-2 pe-0 d-flex align-items-center justify-content-end">
                Catalog
              </div>
              <div className="col form-floating">
                <select
                  id={id + "catalog"}
                  className="form-select"
                  aria-label="Floating label select example"
                  value={catalog}
                  onChange={() => set_catalog(id+"catalog")}
                >
                  <option value="web">Website</option>
                  <option value="app">Application</option>
                  <option value="basic">Basic program</option>
                </select>
                <label>Catalog</label>
              </div>
            </div>

            <div className="row mb-2 pe-3">
              <div className="subtitle col-3 me-0 d-flex align-items-center justify-content-end">
                {" "}
                Num lesson
              </div>
              <div className="col">
                <input
                  id={id + "num_lesson"}
                  type="number"
                  name="coursenumlesson"
                  className="form-control"
                  placeholder={num_lesson}
                />
              </div>
            </div>

            <div className="row mb-2 pe-3">
              <div className="subtitle col-3  ps-0 d-flex justify-content-end">
                Description
              </div>
              <div className="col">
                <textarea
                  id={id + "descript"}
                  type="text"
                  className="p-2 descript-area"
                  name="descript"
                  placeholder={descript}
                />
              </div>
            </div>

            <div className="row mb-2 pe-3">
              <div className="subtitle col-2 pe-0 d-flex align-items-center justify-content-end">
                {" "}
                Source
              </div>
              <div className="col">
                <input
                  id={id + "url"}
                  type="url"
                  name="source"
                  className="form-control"
                  placeholder={url}
                />
              </div>
            </div>

            <div className="d-flex mt-2 mb-4 justify-content-end">
              <button
                type="submit"
                className="btn btn-primary btn-md "
                onClick={() => save()}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="card pb-0 border-0 d-flex align-items-center">
      <div className="row full mb-4">
        <div className="col-md card mt-2 course-card border-0 shadow">
          <div className="card-header">
            <div className="row">
              <div className="col mb-2">
                <h4 className="card-title fw-bold text-dark">{name}</h4>
                <h6 className="card-subtitle">
                  {level} ({num_lesson} lessons)
                </h6>
              </div>
              <button
                className="col mx-3 btn btn-secondary btn-md btn-edit"
                onClick={() => btn_edit()}
              >
                Edit
              </button>
            </div>
          </div>

          <div className="card-body descript overflow-auto mb-3">
            {descript}
          </div>
        </div>

        {render_edit_container()}
      </div>
    </div>
  );
}
