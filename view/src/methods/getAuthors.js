export async function getAuthors() {
  const authToken = localStorage.getItem('idToken');

  let authors = [];
  await fetch('/get-authors', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    for (const author of data) {
      authors.push(
        {
          id: author.id,
          name: author.name,
          email: author.email
        }
      );
    }
  });

  return authors;
}