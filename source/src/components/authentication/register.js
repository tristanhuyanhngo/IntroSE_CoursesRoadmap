import { auth } from "./firebase_config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

//------------------------------------------------------------------------------------------------//
export function signup(email, password) {
  var result = createUserWithEmailAndPassword(auth, email, password);
  result.catch(function (error) {
    console.log(error.Code);
    console.log(error.message);
  });
  sendEmailVerification(auth.currentUser);
}
