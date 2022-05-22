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
<<<<<<< HEAD
    console.log(data);
    for (const topic of JSON.parse(data).topics) {
      console.log(topic);
      topics.push({
        name: topic
      });
=======
    for (const topic of data) {
      topics.push(topic);
>>>>>>> fe3b3e223a8bbe3fd6d914614ce1f59660a5c9fe
    }
  });

  return topics;

}