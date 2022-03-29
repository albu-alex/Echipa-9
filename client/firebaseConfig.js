const admin = require('firebase-admin');
const serviceAccount = require('../../echipa-9-firebase-adminsd.json') // ! Change this when merging

//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://echipa-9-default-rtdb.europe-west1.firebasedatabase.app"
});
exports.db = getFirestore();




// ! Firebase Web App removed !!! generate new firebaseConfig
//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore'

/*
const firebaseConfig = {
  apiKey: "AIzaSyDIBzPF_oTczlUk2JW-XwKhGUMDyrxpAIY",
  authDomain: "echipa-9.firebaseapp.com",
  projectId: "echipa-9",
  storageBucket: "echipa-9.appspot.com",
  messagingSenderId: "415546249027",
  appId: "1:415546249027:web:a78cc102dd7d27244f29f6",
  measurementId: "G-GH330P9D5M"
};*/

/*
const userRef = doc(db, 'Users', '0');
const res = await getDoc(userRef);
console.log(res.data());
*/

/*
const users = await getDocs(collection(db, 'Users'));
users.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data())
});
*/