import "../Course/course_admin.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Course_admin from "../Course/Course_admin";
import { GetAllCourse, InsertCourse } from "../../Handler/Database/Data_setup";
import { HiDocumentAdd } from "../../../node_modules/react-icons/hi";

export default function Course_manage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    GetAllCourse().then((result) => {
      if (result) {
        var Data = [];
        result.forEach((element) => {
          Data.push({
            id: element.val().Id,
            name: element.val().Name,
            level: element.val().Level,
            num_lesson: element.val().Num_lesson,
            catalog: element.val().Catalog,
            descript: element.val().Descript,
            source: element.val().Source,
            view: element.val().View,
            join: element.val().Join
          });
        });
        setCourses(Data);
      }
    });
  }, []);

  const [state, setState] = useState({
    filter: "",
    course: courses,
  });

  const lowercasedFilter = state.filter.toLowerCase();

  const filteredData = courses.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
  });

  function generateRandom(numberOfCharacters) {
    var randomValues = "";
    var stringValues =
      "ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ0123456789";
    var sizeOfCharacter = stringValues.length;
    for (var i = 0; i < numberOfCharacters; i++) {
      randomValues =
        randomValues +
        stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
    }
    return randomValues;
  }

  function addCourse() {
    let ID = generateRandom(20);
    let data = [];
    data.push({
      id: ID,
      name: "",
      level: "",
      num_lesson: "",
      catalog: "",
      descript: "",
      source: "",
      View: 0,
      Join: 0
    });
    InsertCourse(ID);
    for (let i = 0; i < courses.length; i++) data.push(courses[i]);
    setCourses(data);
  }

  return (
    <div className="card border-0 m-3">
      <div className="table-title p-4">
        <h2 className="card-title fw-b mb-2">Course Management </h2>
        <div className="row d-flex justify-content-center">
          <div className="input-group col-sm-8 col-md d-flex align-items-center mb-4">
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

          <div className="col-7 col-sm-5 col-md-4 col-xl-3">
            <button
              type="submit"
              className="btn btn-success btn-md "
              onClick={() => addCourse()}
            >
              <div className="row d-flex justify-content-center align-items-center">
                <HiDocumentAdd className="col-5 icon icon-add" />
                <div className="col"> Add course </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        {filteredData.map((course, index) => (
          <Course_admin
            key={course.id}
            index={index}
            id={course.id}
            name={course.name}
            level={course.level}
            num_lesson={course.num_lesson}
            descript={course.descript}
            source={course.source}
            catalog={course.catalog}
            view = {course.view}
            join = {course.join}
          />
        ))}
      </div>
    </div>
  );
}
