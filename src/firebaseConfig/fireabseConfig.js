// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkywVeUQD09GGNNN5tFISN5MBaXv7dhPI",
  authDomain: "portfolio2-63711.firebaseapp.com",
  projectId: "portfolio2-63711",
  storageBucket: "portfolio2-63711.appspot.com",
  messagingSenderId: "440350726214",
  appId: "1:440350726214:web:b9f8544ab06d1866fdd247",
  measurementId: "G-QT8LG7PZ05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);