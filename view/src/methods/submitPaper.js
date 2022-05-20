export async function submitPaper(_topic, _title, _coAuthor, _keywords, _resume) {
    const authToken = localStorage.getItem('idToken');

    if (_title === '' || _topic === '' || _keywords === '') {
        alert('Mandatory fields are empty!');
        return;
    }
    const paper = document.getElementById('file-upload').files[0];
    if (paper === undefined) {
        alert('No paper selected!');
        return;
    }

    let formData = new FormData();
    formData.append('paper', paper);

    const paperData = {
        topic: _topic,
        title: _title.target.value,
        coAuthor: _coAuthor,
        keywords: _keywords.target.value,
        resume: _resume.target.value
    }

    await fetch('/submit-paper', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'PaperData': JSON.stringify(paperData)
        },
        body: formData
    })
        .then((response) => {
            alert("Success!");
        })
        .catch(() => {
            // alert("Failure!");
        });
}