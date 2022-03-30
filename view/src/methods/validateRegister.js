export function validateRegister(firstName, lastName, type, email, password, confirmPassword) {
    if(firstName === "" || lastName === "" || type === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are mandatory!")
        return
    }
    switch (type) {
        case "chair": break
        case "author": break
        case "reviewer": break
        default: {
            alert("Type MUST be one of chair, author or reviewer")
            return
        }
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if(!email.toLowerCase().match(emailRegex)) {
        alert("Wrong email format!")
        return
    }
    if(!password.match(passwordRegex)) {
        alert("Password should contain at least one digit, at least one lower case, at least one upper case and should be at least 8 characters long")
        return
    }
    if(confirmPassword !== password) {
        alert("Passwords do not match!")
    }
}