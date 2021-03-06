import {
  getDatabase,
  ref,
  get,
  set,
  child,
  remove,
  query,
  equalTo,
  orderByKey,
  orderByChild,
} from "firebase/database";
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
  Email,
  avatar_url,
  role
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
      Role: role,
      Id: id,
      avatar_url,
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
      Role: role,
      Id: id,
      avatar_url,
      Date_create: new Date().getTime(),
    }).catch(() => {});
  }
  console.log(new Date());
}

export function SelectDataUser(userId) {
  const dbref = ref(db);
  return get(child(dbref, "User/" + userId+"/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function UpdateData(userId) {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const username = document.getElementById("username").value;
  const Email = document.getElementById("emailInput").value;
  const phone = document.getElementById("phone").value;
  const gen = document.getElementById("select").value;
  const birthday = document.getElementById("birthday").value;
  const bio = document.getElementById("bioS").value;
  const role = document.getElementById("role").value;
  const url = document.getElementById("avatar_url").value;
  const create = document.getElementById("Date_create").value;
  let ngayGio = new Date(birthday);
  set(ref(db, "User/" + userId), {
    FirstName: fname,
    LastName: lname,
    UserName: username,
    PhoneNumber: phone,
    email: Email,
    Gen: gen,
    Birth_day: ngayGio.getTime(),
    Social_data: bio,
    Role: role,
    Id: userId,
    avatar_url: url,
    Date_create: create,
  }).catch(() => {});
}

export function InsertSocial(userId) {
  const google = document.getElementById("googleID");
  const github = document.getElementById("githubID");
  const facebook = document.getElementById("facebookID");
  const instagram = document.getElementById("instagramID");
  set(ref(db, "Social/" + userId), {
    Google: google.value,
    Github: github.value,
    Facebook: facebook.value,
    Instagram: instagram.value,
  }).catch(() => {});
}

export function SelectSocial(userId) {
  const dbref = ref(db);
  return get(child(dbref, "Social/" + userId))
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

export function GetAllDataOnce() {
  const dbref = ref(db);
  return get(child(dbref, "User"))
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function UpdateRole(id, role) {
  set(ref(db, "User/" + id + "/Role"), role).catch(() => {});
}

export function DeleteData(id) {
  remove(ref(db, "User/" + id)).catch(() => {});
}

export function InsertCourse(id) {
  set(ref(db, "Course/" + id), {
    Name: "",
    Level: "",
    Num_lesson: "",
    Catalog: "",
    Descript: "",
    Source: "",
    Id: id,
    View: 0,
    Join: 0,
  }).catch(() => {});
}

export function UpdateCourse(
  id,
  name,
  level,
  num_lesson,
  catalog,
  descript,
  source
) {
  set(ref(db, "Course/" + id), {
    Name: name,
    Level: level,
    Num_lesson: num_lesson,
    Catalog: catalog,
    Descript: descript,
    Source: source,
    Id: id,
    View: 0,
    Join: 0,
  }).catch(() => {});
}

export async function getCourse(courseName) {
  // const recentCourseRef = query(ref(db, 'Course'), equalTo(courseName));
  const readNewLogEntries = await get(
    query(ref(db, "Course"), orderByChild("Name"), equalTo(courseName))
    // Filters where "type" is equal to "Request". Single arg here ???
  );
  console.log(readNewLogEntries.val());
  return readNewLogEntries.val();
}

export function GetAllCourse() {
  const dbref = ref(db);
  return get(child(dbref, "Course"))
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function getPicture(userId) {
  const dbref = ref(db);
  return get(child(dbref, "User/" + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val().avatar_url;
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function insertComment(courseID, userID,comment,name,username,avt) {
  set(ref(db, "Comment/" + courseID + "/" + userID), {
    Context: comment,
    Timestamp: new Date().getTime(),
    ID: userID,
    Username: username,
    Name: name,
    Avatar: avt
  }).catch(() => {});
}

export function getComment(courseID) {
  const dbref = ref(db);
  return get(child(dbref, "Comment/" + courseID))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

