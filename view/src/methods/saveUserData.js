export async function saveUserData(firstName, surname, phoneNumber, webpage, topics) {
    const authToken = localStorage.getItem('idToken')
    console.log(authToken)
    console.log('firstname:......')
    console.log(firstName)
    const data = {
        "firstName": firstName,
        "surname": surname,
        "phoneNumber": phoneNumber,
        "webpage": webpage,
        "topics": topics
    }
    await fetch('/save-user-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            // localStorage.setItem("email", email);
            localStorage.setItem("name", firstName + " " + surname);
            // alert(res);
            alert("Success!");
        })
        .catch(() => {
            alert("Failure!");
        })
}