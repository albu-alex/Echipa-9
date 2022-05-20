export async function sendReview(review) {
    const authToken = localStorage.getItem('idToken');
    console.log(authToken);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    const data = {
        "review": review,
        "paperId": id
    }

    await fetch('/add-review', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            alert("Success!");
        })
        .catch(() => {
            alert("Failure!");
        })
}