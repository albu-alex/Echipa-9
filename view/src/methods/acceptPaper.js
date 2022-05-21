export async function acceptPaper(paperId){
  const authToken = localStorage.getItem('idToken');
  console.log(authToken);

  const data = {
    "paperId": paperId
  }

  await fetch('/accept-paper', {
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
    alert("Failure");
  })
}