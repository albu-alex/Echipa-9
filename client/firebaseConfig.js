import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIBzPF_oTczlUk2JW-XwKhGUMDyrxpAIY",
  authDomain: "echipa-9.firebaseapp.com",
  projectId: "echipa-9",
  storageBucket: "echipa-9.appspot.com",
  messagingSenderId: "415546249027",
  appId: "1:415546249027:web:a78cc102dd7d27244f29f6",
  measurementId: "G-GH330P9D5M"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;