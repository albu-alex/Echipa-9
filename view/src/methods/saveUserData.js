export async function saveUserData(firstName, surname, phoneNumber, email, webpage, topics) {
    const data = {
        "firstName": firstName,
        "surname": surname,
        "phoneNumber": phoneNumber,
        "email": email,
        "webpage": webpage,
        "topics": topics
    }
    await fetch('/save-user-data', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data
    })
    .then(() => {
        alert("Yay")
    })
    .catch(() => {
        alert("Nay")
    })
}