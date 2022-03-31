export function validateRegister(firstName, lastName, type, email, password, confirmPassword) {
    if(firstName === "" || lastName === "" || type === "" || email === "" || password === "" || confirmPassword === "") {
        throw new Error('All fields are mandatory!');
    }
    switch (type) {
        case "chair": break
        case "author": break
        case "reviewer": break
        default: {
            throw new Error('Type MUST be one of chair, author or reviewer');
        }
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    if(!email.toLowerCase().match(emailRegex)) {
        throw new Error('Wrong email format!');
    }
    
    if(!password.match(passwordRegex)) {
        throw new Error('Password should contain at least one digit, at least one lower case, at least one upper case and should be at least 8 characters long');
    }
    
    if(confirmPassword !== password) {
        throw new Error('Passwords do not match!');
    }
}