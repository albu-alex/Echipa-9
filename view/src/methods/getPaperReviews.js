export async function getPaperReviews(paperId) {
  const authToken = localStorage.getItem('idToken');

  let printReviews = [];
  await fetch('/get-paper-reviews', {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + authToken,
          'Accept': 'application/json',
          'paperId': paperId
      }
  }).then(response => response.json()).then(data => {
      for (const review of JSON.parse(data)) {
          console.log(review);

          printReviews.push(review);
      }
  })
  return printReviews
}