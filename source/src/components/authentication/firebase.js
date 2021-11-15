import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, GoogleAuthProvider,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithRedirect, getRedirectResult
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDOOr-QAUZ0-16dNmzSmk8dj3RmbG23Y8k",
  authDomain: "test-b6178.firebaseapp.com",
  databaseURL:
    "https://test-b6178-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "test-b6178",
  storageBucket: "test-b6178.appspot.com",
  messagingSenderId: "852357699737",
  appId: "1:852357699737:web:b4ebf665b00b8582528008",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
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
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorCode)
    window.alert(errorMessage)
    // ..
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