import { auth, db } from './config/firebaseConfig.mjs';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const firebaseSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const firebaseUserType = async (email) => {
    try {
        const q = query(collection(db, "Users"), where("email", "==", email))
        let result = await getDocs(q)
        return result.docs[0].data()['type']
    }
    catch (error) {
        throw new Error(error.message);
    }
}

const firebaseSignUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    }
    catch (error) {
        throw new Error(error.message);
    }
}


const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
            alert(`User loged in!`);
        }
        else {
            console.log(user);
            alert('You are not logged in!')
        }
    })
}
//monitorAuthState();

export { firebaseSignIn, firebaseSignUp, firebaseUserType };