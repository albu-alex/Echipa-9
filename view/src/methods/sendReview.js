export async function sendReview(review) {
    const data = {
        "review": review
    }
    await fetch('/add-review', {
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