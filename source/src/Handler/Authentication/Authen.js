
import { app, auth } from "../filebase_config";
import {createUserWithEmailAndPassword,sendEmailVerification, GoogleAuthProvider,updatePassword,
  sendPasswordResetEmail,signInWithEmailAndPassword, onAuthStateChanged, signOut, 
  signInWithPopup, getRedirectResult
} from "firebase/auth";
import { useEffect, useState } from "react";


// lấy địa chỉ thông tin của firebase mà nhóm sử dụng (auth)

export function signup(email, password) {
  var result = createUserWithEmailAndPassword(auth, email, password);
  result.catch(function (error) {
    console.log(error.code);
    console.log(error.message);
  });
  sendEmailVerification(auth.currentUser);
}

export function signup_login_gg() {
  const provider = new GoogleAuthProvider(app);
  signInWithPopup(auth, provider).catch((error) => {})
  getRedirectResult(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(()=>{
    onAuthStateChanged(auth, user => setCurrentUser(user));
  },[]);
  return currentUser;
}

export function resetPass(newPass) {
  updatePassword(auth.currentUser, newPass)
    .then(() => {})
    .catch((error) => {});
}

export function forgotPass(email)
{
  return sendPasswordResetEmail(auth, email)
  .catch((error) => {
  })
}