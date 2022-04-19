import { auth, db } from './config/firebaseConfig.mjs';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
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
};

/*
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('You are logged in!');
    }
    else {
        console.log('You are not logged in!');
    }
});
*/

export { firebaseSignIn, firebaseSignUp };