import { callBackendAPI } from './backendRequest.mjs';
import { checkAuthStatus } from '../auth/firebaseAuth.mjs';


export const isLoggedIn = () => {
    checkAuthStatus().then(user => {
        if(user === null) {
            return false;
        }

        callBackendAPI('/isLoggedIn', user.uid).then((response => {
            return response === 'true' ? true : false;
        }));
    }).catch(error => {
        console.log(error.message);
    });

    return false;
}