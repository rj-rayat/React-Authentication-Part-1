// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqxFDirZ_X-_QLTmazL9SQPQd20gY50_8",
  authDomain: "react-auth-176fb.firebaseapp.com",
  projectId: "react-auth-176fb",
  storageBucket: "react-auth-176fb.firebasestorage.app",
  messagingSenderId: "277008480991",
  appId: "1:277008480991:web:4bd364fcf41932afb8476a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);