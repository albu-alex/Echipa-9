import { validateSignIn } from '../methods/validateSignIn.js';
import { validateRegister } from '../methods/validateRegister.js';
import { firebaseSignIn, firebaseSignUp } from "./firebaseAuth.mjs";

const signIn = (email, password) => {
    try {
        validateSignIn(email, password);
        firebaseSignIn(email, password);
        // TODO: make request to backend
    }
    catch (error) {
        alert(error.message); // TODO: Print a nice message
    }
}

const signUp = (firstName, lastName, type, email, password, confirmPassword) => {
    try {
        validateRegister(firstName, lastName, type, email, password, confirmPassword);
        firebaseSignUp(email, password);
        // TODO: make request to backend
    }
    catch (error) {
        alert(error.message); // TODO: Print a nice message
    }
}

export { signIn, signUp };