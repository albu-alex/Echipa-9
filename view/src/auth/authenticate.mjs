import { auth } from './config/firebaseConfig.mjs';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        alert('Sign in successful!');
    }
    catch (error) {
        console.error(error.message);
        throw error;
    }
}

const signUp = async (firstName, lastName, type, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        alert('Sign up successful!');
    }
    catch (error) {
        console.error(error.message);
        throw error;
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

export { signIn, signUp };



/*
function signIn (email, password) {
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User:', userCredential.user);
        })
        .catch((error) => {
            console.error('Login failed!\n', error.message);
        })
}*/

/*
const signUp = async (firstName, lastName, type, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log('User:', userCredential.user);
    })
    .catch((error) => {
        console.error('SignUp failed!\n', error.message);
    })

    await new Promise(resolve => setTimeout(resolve, 15000))
}
*/