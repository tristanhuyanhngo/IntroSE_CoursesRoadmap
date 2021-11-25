import { getDatabase, ref, get, set, child, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { app,auth } from "../filebase_config";

//-----------------------------------------------------------------------------------------//
const db = getDatabase(app);
export var data;
//-----------------------------------------------------------------------------------------//
export function InsertData(
  id,
  Fname,
  Lname,
  Uname,
  Phone,
  Gender,
  Birthday,
  Social,
  Email
) {
  let ngayGio = new Date(Birthday);
  set(ref(db, "User/" + id), {
    FirstName: Fname,
    LastName: Lname,
    UserName: Uname,
    PhoneNumber: Phone,
    email: Email,
    Gen: Gender,
    Birth_day: ngayGio.getTime(),
    Social_data: Social,
    Role: "user",
  }).catch(() => {});
}

//-----------------------------------------------------------------------------------------//
function checktime(time) {
  const date = new Date(time);
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (mm < 10 && dd < 10 && yyyy < 10) return "000" + yyyy + "-0" + mm + "-0" + dd;
  if (mm < 10 && yyyy < 10) return "00" + yyyy + "-0" + mm + "-" + dd;
  if (dd < 10 && yyyy < 10) return "000" + yyyy + "-" + mm + "-0" + dd;
  if (mm < 10 && dd < 10 && yyyy < 100) return "00" + yyyy + "-0" + mm + "-0" + dd;
  if (dd < 10 && yyyy < 100) return "00" + yyyy + "-" + mm + "-0" + dd;
  if (mm < 10 && yyyy < 100) return "00" + yyyy + "-0" + mm + "-" + dd;
  if (mm < 10 && dd < 10 && yyyy < 1000) return "0" + yyyy + "-0" + mm + "-0" + dd;
  if (mm < 10 && dd < 10) return yyyy + "-0" + mm + "-0" + dd;
  if (mm < 10) return yyyy + "-0" + mm + "-" + dd;
  if (dd < 10) return yyyy + "-" + mm + "-0" + dd;
  else return yyyy + "-" + mm + "-" + dd;
}

export function SelectData(userId) {
  const dbref = ref(db);
  return get(child(dbref, "User/" + "AmxMkLMs06T5FBrgeAElKRi9KOq1"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const username = document.getElementById("username");
        const Email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const gen = document.getElementById("select");
        const birthday = document.getElementById("birthday");
        const bio = document.getElementById("bioS");

        fname.value = snapshot.val().FirstName;
        lname.value = snapshot.val().LastName;
        username.value = snapshot.val().UserName;
        Email.value = snapshot.val().email;
        phone.value = snapshot.val().PhoneNumber;
        birthday.value = checktime(snapshot.val().Birth_day);
        gen.value = snapshot.val().Gen;
        bio.value = snapshot.val().Social_data;
      }
    })
    .catch((error) => {});
}

// //-----------------------------------------------------------------------------------------//
// function UpdateData() {
//   set(ref(db, "TheStudents/" + MSSVbox.value), {
//     NameOfStd: namebox.value,
//     Class: Classbox.value,
//     Gender: genbox.value,
//   }).catch(() => {});
// }

// //-----------------------------------------------------------------------------------------//
// function DeleteData() {
//   remove(ref(db, "TheStudents/" + MSSVbox.value)).catch(() => {});
// }
