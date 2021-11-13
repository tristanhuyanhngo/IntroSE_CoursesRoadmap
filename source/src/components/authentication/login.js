import { auth } from "./firebase_config";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
//------------------------------------------------------------------------------------------------//
function signin(email, password) {
  var result = signInWithEmailAndPassword(auth, email, password);
  result.then(() => {
  });
  result.catch(function (error) {
    console.log(error.Code);
    console.log(error.message);
  });
  onAuthStateChanged(auth, (user) => {
    window.alert(2)
    if (user) {
      return user.uid
    } 
  });
  window.alert(1)
}
export default signin
