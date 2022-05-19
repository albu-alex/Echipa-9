export async function sendReview(review) {
    const authToken = localStorage.getItem('idToken')
    // console.log(authToken)
    // console.log(`printing ${review}...`)
    const data = {
        "review": review,
        "paperId": 'WlaCTI6hdbLYHqhwjYgX'
    }

    await fetch('/add-review', {
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