import { validateSignIn } from '../methods/validateSignIn.js';
import { validateRegister } from '../methods/validateRegister.js';
import { firebaseSignIn, firebaseSignUp } from "./firebaseAuth.mjs";


const callBackendAPI = async (uid) => {
    const response = await fetch('/login', {
        headers : {'usertoken': `Bearer ${uid}`}
    });

    if(response.status !== 200) {
        throw new Error('Failed to communicate with backend!');
    }
}

const signIn = async (email, password) => {
    try {
        validateSignIn(email, password);
        const uid = await firebaseSignIn(email, password);
        await callBackendAPI(uid);
        alert('Sign in successful!');
    }
    catch (error) {
        alert(error.message); // TODO: Print a nice message
    }
}

const signUp = async (firstName, lastName, type, email, password, confirmPassword) => {
    try {
        validateRegister(firstName, lastName, type, email, password, confirmPassword);
        const uid = await firebaseSignUp(email, password);
        await callBackendAPI(uid);
        alert('Sign in successful!');
    }
    catch (error) {
        alert(error.message); // TODO: Print a nice message
    }
}

export { signIn, signUp };