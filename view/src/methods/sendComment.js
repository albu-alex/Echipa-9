export async function sendComment(comment) {
    const authToken = localStorage.getItem('idToken');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    const data = {
        "comment": comment,
        "paperId": id
    }
    await fetch('/add-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            alert("Success!")
        })
        .catch(() => {
            alert("Failure!")
        })
}