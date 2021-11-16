
import { app, auth } from "../filebase_config";
import {createUserWithEmailAndPassword,sendEmailVerification, GoogleAuthProvider,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithRedirect, getRedirectResult
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
  signInWithRedirect(auth, provider);
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