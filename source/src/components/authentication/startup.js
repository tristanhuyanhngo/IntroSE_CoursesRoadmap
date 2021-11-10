import {auth} from "./firebase_config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

//------------------------------------------------------------------------------------------------//
export function signup(email, password, confirmpassword) {
  if (email != null && password != null && confirmpassword != null) {
    if (password === confirmpassword) {
      var result = createUserWithEmailAndPassword(auth, email, password);
      sendEmailVerification(auth.currentUser).then(() => {
      })
      .catch(function (error) {
        console.log(error.Code);
        console.log(error.message);
      });
      result.then(() => {
      });
      result.catch(function (error) {
        console.log(error.Code);
        console.log(error.message);
      });
    } else {
      window.alert("Password dont match with the confirm password");
    }
  } else {
    window.alert("Form is incomplete, pls fill out all fields");
  }
}
