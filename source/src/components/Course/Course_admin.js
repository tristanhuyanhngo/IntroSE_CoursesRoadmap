import "./course_admin.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class Course_admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      id: props.id,
      name: props.name,
      level: props.level,
      num_lesson: props.num_lesson,
      descript: props.descript,
      source: props.source,
      open: false,
    };
  }


  save = () => {
    var id = this.state.id;
    var attribute = ["name", "level", "catalog", "descript", "url"];

    for (let i = 0; i < attribute.length; i++) {
      let value = document.getElementById(id + attribute[i]).value;
      console.log(i, id + attribute[i], value);
      if (value != "") {
        if (i == 0) this.setState({ name: value });
        else if (i == 1) this.setState({ level: value });
        else if (i == 2) this.setState({ catalog: value });
        else if (i == 3) this.setState({ descript: value });
        else if (i == 4) this.setState({ url: value });
      }
    }
    console.log(this.state);
  };

  btn_edit = () => {
    console.log("btn_edit");
    if (this.state.open == false) this.setState({ open: true });
    else this.setState({ open: false });
  };

  render_edit_container = () => {
    if (this.state.open == true)
      return (
        <div className="mt-2 edit-site col-md-8" id={this.state.id}>
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
                  id={this.state.id + "name"}
                  type="text"
                  name="coursename"
                  className="form-control"
                  placeholder={this.state.name}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="subtitle col-2 d-flex align-items-center justify-content-end">
                Level
              </div>
              <div className="col form-floating">
                <select
                  id={this.state.id + "level"}
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
                  id={this.state.id + "catalog"}
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
                  id={this.state.id + "descript"}
                  type="text"
                  className="p-2 descript-area"
                  name="descript"
                  placeholder={this.state.descript}
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
                  id={this.state.id + "url"}
                  type="url"
                  name="source"
                  className="form-control"
                  placeholder={this.state.source}
                />
              </div>
            </div>

            <div className="d-flex mt-2 mb-4 justify-content-end">
              <button
                type="submit"
                className="btn btn-primary btn-md "
                onClick={() => this.save()}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      );
  };

  render() {
    return (
      <div className="card pb-0 border-0 d-flex align-items-center">
        <div className="row full mb-4">
          <div className="col-md card mt-2 course-card border-0 shadow">
            <div className="card-header">
              <div className="row">
                <div className="col mb-2">
                  <h4 className="card-title fw-bold text-dark">
                    {this.state.name}
                  </h4>
                  <h6 className="card-subtitle">
                    {this.state.level} ({this.state.num_lesson} lessons)
                  </h6>
                </div>
                <button
                  className="col mx-3 btn btn-secondary btn-md btn-edit"
                  onClick={() => this.btn_edit()}
                >
                  Edit
                </button>
              </div>
            </div>

            <div className="card-body descript overflow-auto mb-3">
              {this.state.descript}
            </div>
          </div>

          {this.render_edit_container()}
        </div>
      </div>
    );
  }
}
export default Course_admin;
