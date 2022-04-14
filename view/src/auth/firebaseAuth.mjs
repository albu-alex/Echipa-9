import { auth } from './config/firebaseConfig.mjs';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const firebaseSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
        return userCredential.user.uid;
    }
    catch (error) {
        throw new Error(error.message);;
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

/*
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User logged in!');
    }
    else {
        console.log('You are not logged in!')
    }
    
});
*/

export { firebaseSignIn, firebaseSignUp };