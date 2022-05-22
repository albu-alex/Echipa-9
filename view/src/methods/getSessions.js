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
    for(let i=0;i<data.length;i++){
      sessions.push({
        name: data[i].name,
        papers: data[i].papers
      })
    }
  })
  return sessions;
}