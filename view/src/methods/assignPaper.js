export async function assignPaper(selectedSessionName, selectedPaperID) {
    const authToken = localStorage.getItem('idToken')
    const data = {
        "sessionName": selectedSessionName,
        "paperID": selectedPaperID
    }
    await fetch('/add-paper-to-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Paper assigned successfully!")
    })
    .catch(() => {
        alert("Error on assignment!")
    })
}