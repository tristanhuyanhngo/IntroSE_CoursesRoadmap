import "./course_admin.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, Component } from "react";

// class Course_admin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: props.index,
//       id: props.id,
//       name: props.name,
//       level: props.level,
//       num_lesson: props.num_lesson,
//       descript: props.descript,
//       source: props.source,
//       open: false,
//     };
//   }

export default function Course_admin(props){

  const [index, setIndex]= useState(props.index);
  const [id, setID]= useState(props.id);
  const [name, setName]= useState(props.name);
  const [level, setLevel]= useState(props.level);
  const [num_lesson, setNumLesson]= useState(props.num_lesson);
  const [descript, setDescript]= useState(props.descript);
  const [source, setSource]= useState(props.source);
  const [catalog, setCatalog]= useState(props.catalog);
  const [url, setUrl]= useState(props.url);
  const [open, setOpen]= useState(false);

  function save() {
    var attribute = ["name", "level", "catalog", "descript", "url"];

    for (let i = 0; i < attribute.length; i++) {
      let value = document.getElementById(id + attribute[i]).value;
      console.log(i, id + attribute[i], value);
      if (value != "") {
        if (i == 0) setName(value);
        else if (i == 1) setLevel(value);
        else if (i == 2) setCatalog(value);
        else if (i == 3) setDescript(value);
        else if (i == 4) setUrl(value);
      }
    }
    // console.log(this.state);
  };

  function btn_edit() {
    if (open == false) setOpen(true);
    else 
      setOpen(false);

    console.log("btn_edit", open);

  };

  function render_edit_container() {
    console.log('render_edit_container')
    if (open == true)
      return (
        <div className="mt-2 edit-site col-md-8" id={id}>
          <div className="card flex-col px-2 shadow rounded-3">
            <h1 id="card-title" className="card-title fw-bold text-dark">
              Edit course
            </h1>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
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

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                Level
              </div>
              <div className="col form-floating">
                <select
                  id={id + "level"}
                  className="form-select"
                  aria-label="Floating label select example"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <label>Course level</label>
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                Catalog
              </div>
              <div className="col form-floating">
                <select
                  id={id + "catalog"}
                  className="form-select"
                  aria-label="Floating label select example"
                >
                  <option value="web">Website</option>
                  <option value="app">Application</option>
                  <option value="basic">Basic program</option>
                </select>
                <label>Catalog</label>
              </div>
            </div>

            <div className="row mb-2 ms-3">
              <div className="subtitle col-2 d-flex justify-content-end">
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

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                {" "}
                Source
              </div>
              <div className="col">
                <input
                  id={id + "url"}
                  type="url"
                  name="source"
                  className="form-control"
                  placeholder={source}
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
  };

  return (
    <div className="card pb-0 border-0 d-flex align-items-center">
      <div className="row full mb-4">
        <div className="col-md card mt-2 course-card border-0 shadow">
          <div className="card-header">
            <div className="row">
              <div className="col mb-2">
                <h4 className="card-title fw-bold text-dark">
                  {name}
                </h4>
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
