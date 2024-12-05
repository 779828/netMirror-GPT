// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7F_i39bDGnoRCnuo2A257EM2PBqL-HEM",
  authDomain: "netmirrorgpt.firebaseapp.com",
  projectId: "netmirrorgpt",
  storageBucket: "netmirrorgpt.firebasestorage.app",
  messagingSenderId: "813242057047",
  appId: "1:813242057047:web:2ffe522b02504e5ae23e12",
  measurementId: "G-RPD2S6C5NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
