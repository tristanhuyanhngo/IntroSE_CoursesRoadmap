import userEvent from "@testing-library/user-event";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  remove
} from "firebase/database";

const db = getDatabase();

export function InsertData(id,Fname,Lname,Uname,Phone,Gender,Birthday,Social) {
  set(ref(db, "User/" + id), {
    FirstName: Fname,
    LastName: Lname,
    UserName: Uname,
    PhoneNumber: Phone,
    Gen: Gender,
    Birth_day:Birthday,
    Social_data:Social,
    Role: "user",
  }).catch(() => {});
}

//-----------------------------------------------------------------------------------------//
export function SelecData(id,Fname,Lname,Uname,Phone,Gender,Birthday,Social) {
  const dbref = ref(db);
  get(child(dbref, "User/" + id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        Fname.value = snapshot.val().FirstName;
        Lname.value = snapshot.val().LastName;
        Uname.value = snapshot.val().UserName;
        Phone.value = snapshot.val().PhoneNumber;
        Gender.value = snapshot.val().Gen;
        Birthday.value = snapshot.val().Birth_day;
        Social.value = snapshot.val().Social_data;
      }
    })
    .catch(() => {});
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
