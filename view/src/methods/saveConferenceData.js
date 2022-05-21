export async function saveConferenceData(name, date, url, topics, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady) {
    const authToken = localStorage.getItem('idToken')
    console.log(authToken)

    const data = {
        "name": name,
        "date": date,
        "url": url,
        "topics": topics,
        "dlPaperSubmission": dlPaperSubmission,
        "dlPaperReview": dlPaperReview,
        "dlPaperAccept": dlPaperAccept,
        "dlCameraReady": dlCameraReady,
        "conferenceId": "99PN0HXy9GmArJN67VIh",
    }
    await fetch('/save-conference-data', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            alert("Yay")
        })
        .catch(() => {
            alert("Nay")
        })
}