export async function saveSession(name) {
    const authToken = localStorage.getItem('idToken')

    const data = {
        'name': name,
        'conferenceId': '99PN0HXy9GmArJN67VIh'
    }

    await fetch('add-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Session saved successfully!")
    })
    .catch(() => {
        alert("Error")
    })
}