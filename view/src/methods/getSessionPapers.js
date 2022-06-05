export async function getSessionPapers(sessionName) {
    const authToken = localStorage.getItem('idToken');

    let papers = [];
    await fetch('/get-session-papers', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json',
            'sessionName': sessionName
        },
    }).then(response => response.json()).then(data => {
        for(let i=0;i<data.length;i++){
            papers.push(data[i])
        }
    })
    return papers;
}