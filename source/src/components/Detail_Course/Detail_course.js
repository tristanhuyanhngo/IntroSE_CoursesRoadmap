import "./detail_course.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "../../../node_modules/react-icons/ai";
import avatar from "../../picture/avatar.png";
import Story from "../Story/Story";
import {
  getComment,
  insertComment,
  SelectDataUser,
} from "../../Handler/Database/Data_setup";

export default function Detail_course(props) {
  // props.id, props.name, props.level, props.num_lesson, props.descript,
  //props.catalog, props.view,  props.join
  let index = 1;
  let id = "I5YLNwZbtM3r9JGpOYDb";
  let name = "HTML";
  let level = "beginner";
  let num_lesson = "50";
  let descript =
    "Lorem Ipsum is simply dummy text of the printing and ypesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it?   It is a long established fact that a reader will be distracted by the readable content of a page ";
  let catalog = "web";
  let view = 150;
  let join = 123;

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getComment(id).then((result) => {
      if (result) {
        var user_comment = [];
        result.forEach((element) => {
          user_comment.push({
            avatar: element.val().avatar,
            username: element.val().UserName,
            name: element.val().Name,
            content: element.val().Context,
            timestamp: element.val().Timestamp,
          });
        });
        setUsers(user_comment);
      }
    });
  }, []);

  function render_comment() {
    var comments = [];
    for (let i = 0; i < users.length; i++) {
      let cmt = {};
      cmt.name = users[i].name;
      cmt.username = users[i].username;
      cmt.avatar = users[i].avatar;
      cmt.content = users[i].content;
      cmt.timestamp = users[i].timestamp;
      comments.push(cmt);
    }

    let comment_element = comments.map((cmt, index) => {
      return (
        <Story
          className="col-4"
          name={cmt.name}
          username={cmt.username}
          avatar={cmt.avatar}
          story={cmt.content}
          timestamp={cmt.timestamp}
        />
      );
    });

    return comment_element;
  }

  function send_comment() {
    SelectDataUser(localStorage.getItem("ID")).then((result) => {
      if (result) {
        const { FirstName, LastName, UserName, avatar_url } = result;
        let comment = document.getElementById("comment").value;
        let userid = localStorage.getItem("ID");
        if (comment != "")
          insertComment(id, userid, comment, FirstName + "" + LastName, UserName, avatar_url);
      }
    });
  }

  function shareFB() {
    const btn = document.querySelector("#shareHref");
    btn.click();
  }

  return (
    <div className="container">
      <div className="card flex-row my-5 px-4 border-0 shadow rounded-3">
        <div className="card-body">
          <h1 className="card-title fw-bold mb-3">Course</h1>

          {/* brief course */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="row full mb-2">
                <div className="card-header border">
                  <h5 className="card-subtitle text-start mb-3">Course</h5>
                  <h3 className="card-title fw-bold text-dark mb-0">{name}</h3>
                  <h6 className="card-subtitle">
                    {level} ({num_lesson} lessons)
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col-7 col-md-12">
                  <div className="row">View: {view}</div>
                  <div className="row mb-2">Join course: {join}</div>
                </div>
                <div className="col mb-5">
                  <div className="row">
                    <button className="col-5 btn btn-primary me-2">Join</button>
                    <button
                      className="col-5 btn btn-primary"
                      onClick={() => shareFB()}
                    >
                      Share
                    </button>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://courses.ctda.hcmus.edu.vn/login/index.php"
                      target="_blank"
                      hidden
                      id="shareHref"
                    >
                      Share on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* detail*/}
            <div className="col description">{descript}</div>
          </div>

          <div className="row hi">
            <h4 className="card-title fw-bold">Comment</h4>
            <div className="row mb-4">
              <input type="text" id="comment" className="col form-control" />
              <button
                className="btn btn-success btn-send col-2 ms-2"
                onClick={() => send_comment()}
              >
                <AiOutlineSend />
              </button>
            </div>

            {render_comment()}
          </div>
        </div>
      </div>
    </div>
  );
}
