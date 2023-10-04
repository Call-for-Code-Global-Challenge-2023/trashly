// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLYo6yqeLJ__5RxYuKirHX1EiwaXLCqIw",
  authDomain: "trashly-backend.firebaseapp.com",
  projectId: "trashly-backend",
  storageBucket: "trashly-backend.appspot.com",
  messagingSenderId: "838514066442",
  appId: "1:838514066442:web:152fe28e399c83619c0bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;