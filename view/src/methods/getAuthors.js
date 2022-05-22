export async function getAuthors() {
  let authors = [];
  await fetch ('/get-authors', {
    method: 'GET',
    headers: {
      'Accept': 'application/json' 
    }
  }).then(response => response.json()).then(data => {
    for(const author of JSON.parse(data)) {
      console.log(author);
      authors.push(
        {id: author.id,
        name: author.name,
        email: author.email}
      );
    }
  })
  return authors
}