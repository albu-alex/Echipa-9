import { validateSignIn } from '../methods/validateSignIn.js';
import { validateRegister } from '../methods/validateRegister.js';
import { firebaseSignIn, firebaseSignUp } from "./firebaseAuth.mjs";


const callBackendAPI = async (uid, ...args) => {
    let requestHeaders = null;
    if (args.length === 4) {
        requestHeaders = {
            'usertoken': `Bearer ${uid}`,
            'username': args[0] + ' ' + args[1],
            'useremail': args[2],
            'usertype': args[3]
        };
    }
    else {
        requestHeaders = {'usertoken': `Bearer ${uid}`};
    }

    const response = await fetch('/login', {
        method: 'POST',
        headers : requestHeaders
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
        await callBackendAPI(uid, firstName, lastName, email, type);
        alert('Sign up successful!');
    }
    catch (error) {
        alert(error.message); // TODO: Print a nice message
    }
}

export { signIn, signUp };