export async function getPaperComments(paperId) {
  const authToken = localStorage.getItem('idToken');
  alert(paperId)

  let comments = [];
  await fetch('/get-paper-comments', {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + authToken,
          'Accept': 'application/json',
          'paperId': paperId
      }
    })
    .then(response => response.json()).then(data => {
        console.log(data)
        for(const comment of JSON.parse(data).comments) {
            comments.push(comment)
        }
    })
    .catch(() => {
        console.log('Error')
    })
  return comments
}