import "../Course/course_admin.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Course_admin from "../Course/Course_admin";
import { GetAllCourse } from "../../Handler/Database/Data_setup";
// {
//     id: 'htmlcss',
//     name: 'HTML/CSS',
//     level: 'Beginner',
//     num_lesson: '20',
//     catalog:'web',
//     descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     source: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
// },

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
          });
        });
        console.log(Data);
        setCourses(Data);
      }
    });
  }, []);

  const [state, setState] = useState({
    filter: "",
    course: courses,
  });

  const lowercasedFilter = state.filter.toLowerCase();

  const filteredData = courses.filter(item => {
      return Object.keys(item).some(key =>
          item[key].toLowerCase().includes(lowercasedFilter)
      );
  });

  return (
    <div className="card border-0 m-3">
      <div className="table-title p-4">
        <h2 className="card-title fw-b mb-2">Course Management </h2>

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
      <div className="d-flex flex-column justify-content-center">
        {filteredData.map((course, index) => (
                    <Course_admin 
                        key = {course.id}
                        index = {index}
                        id = {course.id}
                        name={course.name}
                        level= {course.level}
                        num_lesson = {course.num_lesson}
                        descript = {course.descript}
                    />
                        
                ))}
      </div>
    </div>
  );
}
