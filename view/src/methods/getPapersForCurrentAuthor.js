export async function getPapersForCurrentAuthor(){
  const authToken = localStorage.getItem('idToken');
  
  let printPapers = [];
  await fetch('/get-papers-for-author', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + authToken,
            'Accept': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    for(const paper of JSON.parse(data).papers){
      console.log(paper);
      printPapers.push({id: paper.id, title: paper.title, coAuthor: paper.coAuthor, topic: paper.topic, keywords: paper.keywords});
    }
  });
  return printPapers;
}