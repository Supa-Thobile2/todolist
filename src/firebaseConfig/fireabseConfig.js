// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-mvAXXn_A41MIzEt9iPVoQzHcipoaVxs",
  authDomain: "to-do-list-6ad37.firebaseapp.com",
  projectId: "to-do-list-6ad37",
  storageBucket: "to-do-list-6ad37.appspot.com",
  messagingSenderId: "1043048217804",
  appId: "1:1043048217804:web:f0231ee05bff5cf99c5669",
  measurementId: "G-YZL43JT83Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);