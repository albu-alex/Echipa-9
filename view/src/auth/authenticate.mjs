import { validateSignIn } from '../methods/validateSignIn.js';
import { validateRegister } from '../methods/validateRegister.js';
import { firebaseSignIn, firebaseSignUp } from "./firebaseAuth.mjs";


const callBackendAPI = async (link, uid, ...args) => {
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
        requestHeaders = { 'usertoken': `Bearer ${uid}` };
    }

    const response = await fetch(link, {
        method: 'POST',
        headers: requestHeaders
    });

    if (response.status !== 200) {
        throw new Error('Failed to communicate with backend!');
    }

    return response;
}

const signIn = async (email, password) => {
    try {
        validateSignIn(email, password);
        const uid = await firebaseSignIn(email, password);
        const response = await callBackendAPI('/signIn', uid);

        console.log(response);
        alert('Sign in successful!');
    }
    catch (error) {
        alert(error.message);
    }
}

const signUp = async (firstName, lastName, type, email, password, confirmPassword) => {
    try {
        validateRegister(firstName, lastName, type, email, password, confirmPassword);
        const uid = await firebaseSignUp(email, password);
        const response = await callBackendAPI('/signUp', uid, firstName, lastName, email, type);

        console.log(response);
        alert('Sign up successful!');
    }
    catch (error) {
        alert(error.message);
    }
}

export { signIn, signUp };