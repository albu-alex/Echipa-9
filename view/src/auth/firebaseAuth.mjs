import { auth } from './config/firebaseConfig.mjs';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const firebaseSignIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        alert('Sign in successful!');
    }
    catch (error) {
        console.error(error.message);
        throw new Error(error.message);;
    }
}

const firebaseSignUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        alert('Sign up successful!');
    }
    catch (error) {
        console.error(error.message);
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

export { firebaseSignIn, firebaseSignUp };



/*
function signIn (email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert('Sign in successful!');
        })
        .catch((error) => {
            //console.error('Login failed!\n', error.message);
            throw error;
        })
}
*/
/*
const signUp = async (firstName, lastName, type, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log('User:', userCredential.user);
    })
    .catch((error) => {
        console.error('SignUp failed!\n', error.message);
    })

}
*/