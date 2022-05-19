export async function sendReview(review) {
<<<<<<< HEAD
    const authToken = localStorage.getItem('tokenId');
    console.log(authToken);
=======
    const authToken = localStorage.getItem('idToken')
    // console.log(authToken)
    // console.log(`printing ${review}...`)
>>>>>>> 30def745068565de44d7839092778324d56100ca
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