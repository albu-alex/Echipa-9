export async function getSessions() {
  const authToken = localStorage.getItem('idToken');

  let sessions = [];
  await fetch('/get-sessions', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Accept': 'application/json',
      'conferenceId': '99PN0HXy9GmArJN67VIh'
    },
  }).then(response => response.json()).then(data => {
    console.log(data);
    for (const session of JSON.parse(data).sessions) {
      console.log(session);
      sessions.push({
        name: session.name,
        papers: session.papers
      });
    }
  })
  return sessions;

}