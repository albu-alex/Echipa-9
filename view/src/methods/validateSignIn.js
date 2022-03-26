export function validateSignIn(email, password) {
    if(email === "") {
        alert("Email cannot be empty!")
        return
    }
    if(password === ""){
        alert("Password cannot be empty!")
        return
    }
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if(!email.toLowerCase().match(emailRegex)){
        alert("Wrong email format!")
        return
    }
    if(!password.match(passwordRegex)){
        alert("Password should contain at least one digit, at least one lower case, at least one upper case and should be at least 8 characters long")
    }
}