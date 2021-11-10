import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// lấy địa chỉ thông tin của firebase mà nhóm sử dụng (auth)