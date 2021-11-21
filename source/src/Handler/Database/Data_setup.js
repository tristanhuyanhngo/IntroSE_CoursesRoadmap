import { getDatabase, ref, get, set, child, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../filebase_config";
const db = getDatabase(app);
export var data;
export function InsertData(
  id,
  Fname,
  Lname,
  Uname,
  Phone,
  Gender,
  Birthday,
  Social
) {
  set(ref(db, "User/" + id), {
    FirstName: Fname,
    LastName: Lname,
    UserName: Uname,
    PhoneNumber: Phone,
    Gen: Gender,
    Birth_day: Birthday,
    Social_data: Social,
    Role: "user",
  }).catch(() => {});
}

//-----------------------------------------------------------------------------------------//
export function SelectData(userId) {
  const[name,setName] = useState()
  useEffect(() => {
    onValue(
      ref(db, "User/" + userId),
      (snapshot) => {

        setName(snapshot.val() && snapshot.val().FirstName)
      },
      []
    );
    return name
  });
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
