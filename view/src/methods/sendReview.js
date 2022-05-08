export async function sendReview(review) {
    const authToken = localStorage.getItem('uid')
    console.log(authToken)
    const data = {
        "review": review
    }
    await fetch('/add-review', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + authToken
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