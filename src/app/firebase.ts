// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaRjGRStAuuXHcNnYp-OKgSQW9OGuGeBQ",
  authDomain: "expense-tracker-8e59c.firebaseapp.com",
  projectId: "expense-tracker-8e59c",
  storageBucket: "expense-tracker-8e59c.appspot.com",
  messagingSenderId: "427489290985",
  appId: "1:427489290985:web:5a2d8765931069f4fe1e78",
  measurementId: "G-2WWKX62Y8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);