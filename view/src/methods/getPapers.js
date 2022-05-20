// NOT USED

export async function getPapers() {
    const authToken = localStorage.getItem('idToken');

    let printPapers = [];
    await fetch('/get-papers', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        for (const paper of JSON.parse(data).papers) {
            console.log(paper);
            const _title = paper.title;
            const _authors = [paper.authorName, paper.coAuthor];

            printPapers.push({ title: _title, authors: _authors });
        }
    }).catch(() => {
        printPapers = []
    })
    return printPapers
}