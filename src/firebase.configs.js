// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmyIe7lqTXhH_ng2BJ0Wh-2wUrXAy4vak",
  authDomain: "mikced.firebaseapp.com",
  projectId: "mikced",
  storageBucket: "mikced.appspot.com",
  messagingSenderId: "439724448606",
  appId: "1:439724448606:web:4b591741727236af000dcf",
  measurementId: "G-V273WMRJRT"
};


export function initializeFb() {
  // Initialize Firebase
  // if (!firebase.apps.length) {
   return initializeApp(firebaseConfig);
  // }
 }
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);