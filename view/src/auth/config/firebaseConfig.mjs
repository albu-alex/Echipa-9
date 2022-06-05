import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDIBzPF_oTczlUk2JW-XwKhGUMDyrxpAIY",
  authDomain: "echipa-9.firebaseapp.com",
  databaseURL: "https://echipa-9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "echipa-9",
  storageBucket: "echipa-9.appspot.com",
  messagingSenderId: "415546249027",
  appId: "1:415546249027:web:ba23cbb88524a0494f29f6",
  measurementId: "G-QPNBMKQEN2"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db };
export { auth };