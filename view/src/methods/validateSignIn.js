export function validateSignIn(email, password) {
    if(email === "") {
        alert("Email cannot be empty!")
        return
    }
    if(password === ""){
        alert("Password cannot be empty!")
    }
}