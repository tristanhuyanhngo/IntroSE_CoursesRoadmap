import { auth } from "./firebase_config";
import { app } from "./firebase_config";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
//------------------------------------------------------------------------------------------------//
export function signup_gg() {
  const provider = new GoogleAuthProvider(app);
  signInWithRedirect(auth, provider);
  getRedirectResult(auth);
}