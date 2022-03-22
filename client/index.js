// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIBzPF_oTczlUk2JW-XwKhGUMDyrxpAIY",
  authDomain: "echipa-9.firebaseapp.com",
  projectId: "echipa-9",
  storageBucket: "echipa-9.appspot.com",
  messagingSenderId: "415546249027",
  appId: "1:415546249027:web:a78cc102dd7d27244f29f6",
  measurementId: "G-GH330P9D5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);