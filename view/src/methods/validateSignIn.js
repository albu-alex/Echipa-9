export function validateSignIn(email, password) {
    if(email === "") {
        throw new Error('Email cannot be empty!');
    }
    if(password === ""){
        throw new Error('Password cannot be empty!');
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

    if(!email.toLowerCase().match(emailRegex)) {
        throw new Error('Wrong email format!');
    }

    if(!password.match(passwordRegex)) {
        throw new Error('Password should contain at least one digit, at least one lower case, at least one upper case and should be at least 8 characters long');
    }
}