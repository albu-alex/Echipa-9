export async function getTopics() {
  const authToken = localStorage.getItem('idToken');

  let topics = [];
  await fetch('/get-topics', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Accept': 'application/json'
    }
  }).then(response => response.json()).then(data => {
    for (const topic of JSON.parse(data).topics) {
      console.log(topic);
      topics.push({
        name: topic
      });
    }
  })
  return topics;
}