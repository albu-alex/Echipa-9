export async function submitPaper(topic, title, coAuthor, keywords, resume) {
    const authToken = localStorage.getItem('uid')
    console.log(authToken)
    const data = {
        "topic": topic,
        "title": title,
        "coAuthor": coAuthor,
        "keywords": keywords,
        "resume": resume
    }
    await fetch('/submit-paper', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: data
    })
    .then(() => {
        alert("Yay")
    })
    .catch(() => {
        alert("Nay")
    })
}