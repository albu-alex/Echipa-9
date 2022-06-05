export async function getPaperLink() {
    const authToken = localStorage.getItem('idToken');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    let link = "";
    await fetch('/get-paper-link', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'paperId': id
        }
    }).then(response => { link = response.text() });

    return link;
}