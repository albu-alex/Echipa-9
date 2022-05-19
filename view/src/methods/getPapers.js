export async function getPapers() {
    const authToken = localStorage.getItem('idToken');

    const response = await fetch('/get-papers', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json'
        }
    });

    const JSONdata = await response.json();
    const papers = JSON.parse(JSONdata);
    
    let printPapers = []
    for(const paper of papers.papers) {
        const _title = paper.title;
        const _authors = [paper.authorName, paper.coAuthor];

        printPapers.push({title: _title, authors: _authors});
    }

    return printPapers;

}