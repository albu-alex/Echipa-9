export async function sendReview(review) {
    const authToken = localStorage.getItem('tokenId');
    console.log(authToken);
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