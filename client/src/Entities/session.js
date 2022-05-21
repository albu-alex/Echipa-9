class Session {
    constructor() {
        this.sessionId = null;
        this.name = '';
        this.conferenceId = null;
        this.papers = [];   // list of papers
    }

    getSessionId() {
        return this.sessionId;
    }

    getConferenceId() {
        return this.conferenceId;
    }

    getName() {
        return this.name;
    }

    getPapers() {
        return this.papers;
    }

    setSessionId(newId) {
        this.sessionId = newId;
    }

    setConferenceId(newId) {
        this.conferenceId = newId;
    }

    setName(newName) {
        this.name = newName;
    }

    setPapers(newPapers) {
        this.papers = newPapers;
    }

    addPaper(paperId) {
        this.papers.push(paperId)
    }

    toFirestore() {
        return {
            conferenceId: this.conferenceId,
            name: this.name,
            papers: Object.fromEntries(this.papers)
        }
    }

    static fromFirestore(sessionId, Object) {
        let session = new Session();
        session.setSessionId(sessionId);
        session.setConferenceId(Object.conferenceId);
        session.setName(Object.getName());

        const papers = Object.papers;
        for (const paper in papers) {
            session.addPaper(paper);
        }

        return session;
    }
}

exports.Session = Session;