export async function sendComment(comment) {
    const authToken = localStorage.getItem('uid')
    console.log(authToken)
    const data = {
        "comment": comment
    }
    await fetch('/add-comment', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Yay")
    })
    .catch(() => {
        alert("Nay")
    })
}