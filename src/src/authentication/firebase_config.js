import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

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


export default auth;