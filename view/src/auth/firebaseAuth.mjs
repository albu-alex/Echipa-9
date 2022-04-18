import { auth } from './config/firebaseConfig.mjs';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    }
    catch (error) {
        throw new Error(error.message);;
    }
};

const firebaseSignUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    }
    catch (error) {
        throw new Error(error.message);
    }
};

function checkAuthStatus() {
    return new Promise((resolve, reject) => {
        try {
          auth.onAuthStateChanged(user => {
               resolve(user);
           });
        } catch {
          reject('api failed')
        }
      });
}

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

export { firebaseSignIn, firebaseSignUp, checkAuthStatus };