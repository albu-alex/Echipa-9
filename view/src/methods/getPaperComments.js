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
    })
    .catch(() => {
        alert("sal")
    })
  return comments
}