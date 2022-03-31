export function validateSignIn(email, password) {
    if(email === "") {
        throw new Error('Email cannot be empty!');
        //alert("Email cannot be empty!")
        //return
    }
    if(password === ""){
        throw new Error('Password cannot be empty!');
        //alert("Password cannot be empty!")
        //return
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if(!email.toLowerCase().match(emailRegex)) {
        throw new Error('Wrong email format!');
        //alert("Wrong email format!")
        //return
    }
    // ! password regex does not work!
    /*
    if(!password.match(passwordRegex)) {
        throw new Error('Password should contain at least one digit, at least one lower case, at least one upper case and should be at least 8 characters long');
        //alert("Password should contain at least one digit, at least one lower case, at least one upper case and should be at least 8 characters long")
    }
    */
}