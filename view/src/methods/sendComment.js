export async function sendComment(comment) {
    const data = {
        "comment": comment
    }
    await fetch('/add-comment', {
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