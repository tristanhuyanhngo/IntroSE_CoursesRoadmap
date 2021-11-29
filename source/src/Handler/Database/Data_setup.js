import { getDatabase, ref, get, set, child } from "firebase/database";
import { app } from "../filebase_config";
//-----------------------------------------------------------------------------------------//
const db = getDatabase(app);
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
  if (Birthday !== "") {
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
      Id: id,
      Date_create: new Date().getTime(),
    }).catch(() => {});
  } else {
    set(ref(db, "User/" + id), {
      FirstName: Fname,
      LastName: Lname,
      UserName: Uname,
      PhoneNumber: Phone,
      email: Email,
      Gen: Gender,
      Birth_day: 0,
      Social_data: Social,
      Role: "user",
      Id: id,
      Date_create: new Date().getTime(),
    }).catch(() => {});
  }
  console.log(new Date());
}

//-----------------------------------------------------------------------------------------//
export function SelectDataUser(userId) {
  const dbref = ref(db);
  return get(child(dbref, "User/" + "AmxMkLMs06T5FBrgeAElKRi9KOq1"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// //-----------------------------------------------------------------------------------------//
export function UpdateData(userId) {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const username = document.getElementById("username").value;
  const Email = document.getElementById("emailInput").value;
  const phone = document.getElementById("phone").value;
  const gen = document.getElementById("select").value;
  const birthday = document.getElementById("birthday").value;
  const bio = document.getElementById("bioS").value;
  let ngayGio = new Date(birthday);
  set(ref(db, "User/" + "AmxMkLMs06T5FBrgeAElKRi9KOq1"), {
    FirstName: fname,
    LastName: lname,
    UserName: username,
    PhoneNumber: phone,
    email: Email,
    Gen: gen,
    Birth_day: ngayGio.getTime(),
    Social_data: bio,
  }).catch(() => {});
}

// //-----------------------------------------------------------------------------------------//
export function InsertSocial(userId) {
  const google = document.getElementById("googleID");
  const github = document.getElementById("githubID");
  const facebook = document.getElementById("facebookID");
  const instagram = document.getElementById("instagramID");
  set(ref(db, "Social/" + "AmxMkLMs06T5FBrgeAElKRi9KOq1"), {
    Google: google.value,
    Github: github.value,
    Facebook: facebook.value,
    Instagram: instagram.value,
  }).catch(() => {});
}

export function SelectSocial(userId) {
  const dbref = ref(db);
  return get(child(dbref, "Social/" + "AmxMkLMs06T5FBrgeAElKRi9KOq1"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const google = document.getElementById("googleID");
        const github = document.getElementById("githubID");
        const facebook = document.getElementById("facebookID");
        const instagram = document.getElementById("instagramID");
        if (snapshot.val().Google != null) google.value = snapshot.val().Google;
        if (snapshot.val().Github != null) github.value = snapshot.val().Github;
        if (snapshot.val().Facebook != null)
          facebook.value = snapshot.val().Facebook;
        if (snapshot.val().Instagram != null)
          instagram.value = snapshot.val().Instagram;
      }
    })
    .catch((error) => {});
}

//-----------------------------------------------------------------------------------------//
export function checktime(time) {
  const date = new Date(time);
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (mm < 10 && dd < 10 && yyyy < 10)
    return "000" + yyyy + "-0" + mm + "-0" + dd;
  if (mm < 10 && yyyy < 10) return "00" + yyyy + "-0" + mm + "-" + dd;
  if (dd < 10 && yyyy < 10) return "000" + yyyy + "-" + mm + "-0" + dd;
  if (mm < 10 && dd < 10 && yyyy < 100)
    return "00" + yyyy + "-0" + mm + "-0" + dd;
  if (dd < 10 && yyyy < 100) return "00" + yyyy + "-" + mm + "-0" + dd;
  if (mm < 10 && yyyy < 100) return "00" + yyyy + "-0" + mm + "-" + dd;
  if (mm < 10 && dd < 10 && yyyy < 1000)
    return "0" + yyyy + "-0" + mm + "-0" + dd;
  if (mm < 10 && dd < 10) return yyyy + "-0" + mm + "-0" + dd;
  if (mm < 10) return yyyy + "-0" + mm + "-" + dd;
  if (dd < 10) return yyyy + "-" + mm + "-0" + dd;
  else return yyyy + "-" + mm + "-" + dd;
}

//-----------------------------------------------------------------------------------------//
export function GetAllDataOnce() {
  const dbref = ref(db);
  return get(child(dbref, "User"))
    .then((snapshot) => {
        return snapshot
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// function DeleteData() {
//   remove(ref(db, "TheStudents/" + MSSVbox.value)).catch(() => {});
// }
