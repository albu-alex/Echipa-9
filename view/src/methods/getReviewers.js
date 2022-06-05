export async function getReviewers() {
  let reviewers = [];
  await fetch ('/get-reviewers', {
    method: 'GET',
    headers: {
      'Accept': 'application/json' 
    }
  }).then(response => response.json()).then(data => {
    for(const reviewer of JSON.parse(data).reviewers) {
      console.log(reviewer);
      reviewers.push(
        {id: reviewer.id,
        name: reviewer.name,
        email: reviewer.email}
      );
    }
  })
  return reviewers
}