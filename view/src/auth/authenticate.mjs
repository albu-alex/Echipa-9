import { validateSignIn } from '../methods/validateSignIn.js';
import { validateRegister } from '../methods/validateRegister.js';
import { firebaseSignIn, firebaseSignUp } from "./firebaseAuth.mjs";

import { auth } from "./config/firebaseConfig.mjs";
import { callBackendAPI } from '../scripts/backendRequest.mjs';

const signIn = async (email, password) => {
    try {
        validateSignIn(email, password);
        const userData = await firebaseSignIn(email, password);


        callBackendAPI('/signIn', userData['idToken']).then(response => {
            auth.currentUser.getIdToken(true);

            auth.currentUser.getIdTokenResult().then(idTokenResult => {
                const role = idTokenResult.claims.role;

                localStorage.setItem("uid", auth.currentUser.uid);
                localStorage.setItem("idToken", userData['idToken']);
                localStorage.setItem("email", auth.currentUser.email)
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("role", role);

                switch (idTokenResult.claims.role) {
                    case 'chair':
                        window.location.href = './chairhome';
                        break;
                    case 'author':
                        window.location.href = './authorhome';
                        break;
                    case 'reviewer':
                        window.location.href = './reviewerhome';
                        break;
                    default:
                        console.log('Invalid role!');
                }
            })
        });
    }
    catch (error) {
        alert(error.message);
    }
}

const signUp = async (firstName, lastName, type, email, password, confirmPassword) => {
    try {
        validateRegister(firstName, lastName, type, email, password, confirmPassword);
        const userData = await firebaseSignUp(email, password);

        callBackendAPI('/signUp', userData['idToken'], firstName, lastName, email, type).then(response => {

            localStorage.setItem("uid", auth.currentUser.uid);
            localStorage.setItem("idToken", userData['idToken']);
            localStorage.setItem("email", email)
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("role", type);

            switch (type) {
                case 'chair':
                    window.location.href = './chairhome';
                    break;
                case 'author':
                    window.location.href = './authorhome';
                    break;
                case 'reviewer':
                    window.location.href = './reviewerhome';
                    break;
                default:
                    console.log('Invalid role!');
            }
        });
    } catch (error) {
        alert(error.message);
    }
}

export { signIn, signUp };