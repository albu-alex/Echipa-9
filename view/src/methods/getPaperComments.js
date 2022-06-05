export async function getPaperComments(paperId) {
    const authToken = localStorage.getItem('idToken');

    let comments = [];
    await fetch('/get-paper-comments', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json',
            'paperId': paperId
        }
    }).then(response => response.json()).then(data => {
        let commentsReceived = Object.values(data);
        for (const comment of commentsReceived) {
            comments.push(comment)
        }
    })

    return comments;
}