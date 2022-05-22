export async function getTopics() {
  const authToken = localStorage.getItem('idToken');

  let topics = [];
  await fetch('/get-topics', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Accept': 'application/json',
      'conferenceId': '99PN0HXy9GmArJN67VIh'
    },
  }).then(response => response.json()).then(data => {
    for (const topic of data) {
      topics.push(topic);
    }
  });

  return topics;

}