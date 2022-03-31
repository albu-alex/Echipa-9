export function validateRegister(firstName, lastName, type, email, password, confirmPassword) {
    if(firstName === "" || lastName === "" || type === "" || email === "" || password === "" || confirmPassword === "") {
        throw new Error('All fields are mandatory!');
        //alert("All fields are mandatory!")
        //return
    }
    switch (type) {
        case "chair": break
        case "author": break
        case "reviewer": break
        default: {
            throw new Error('Type MUST be one of chair, author or reviewer');
            //alert("Type MUST be one of chair, author or reviewer")
            //return
        }
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
        //return
    }
    */
    if(confirmPassword !== password) {
        throw new Error('Passwords do not match!');
        //alert("Passwords do not match!")
    }
}