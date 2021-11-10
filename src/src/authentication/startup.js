import auth from "./firebase_config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const signupbtn = document.getElementById("signupBtn");
const email = document.getElementById("floatingInputEmail");
const password = document.getElementById("floatingPassword");
const Cpassword = document.getElementById("floatingPasswordConfirm");
//------------------------------------------------------------------------------------------------//
const signup = () => {
  console.log(email);
  console.log(signupbtn);
  console.log(password);
  console.log(Cpassword);

  signupbtn.disabled = true;
  signupbtn.textContent = "Registering Your Account! Please Wait";
  if (email.value != null && password.value != null && Cpassword.value != "") {
    if (password.value == Cpassword.value) {
      var result = createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      result.then((userCredential) => {
        sendVerification();
      });
      result.catch(function (error) {
        signupbtn.disabled = false;
        signupbtn.textContent = "Sign Up";

        console.log(error.Code);
        console.log(error.message);
        window.alert("Messegar : " + error.message);
      });
    } else {
      window.alert("Password dont match with the confirm password");
    }
  } else {
    window.alert("Form is incomplete, pls fill out all fields");
  }
};

const sendVerification = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      window.location.href = "signout.html";
    })
    .catch((error) => {
      console.log(error);
    });
};

signupbtn.addEventListener("click", signup);

export default signup;
