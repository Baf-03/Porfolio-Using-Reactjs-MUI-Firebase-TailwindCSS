// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz0ydDEI33-iBjYdNUu2hrucNB_sNltzM",
  authDomain: "portfolio-e6f84.firebaseapp.com",
  projectId: "portfolio-e6f84",
  storageBucket: "portfolio-e6f84.appspot.com",
  messagingSenderId: "816797524610",
  appId: "1:816797524610:web:3a42743851bd63e860ca9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {app,db,auth}