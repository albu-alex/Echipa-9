class Paper {
    constructor() {
        this.path = null;
        this.title = null;
        this.topic = null;
        this.authorId = null;
        this.coAuthor = null;
        this.keywords = null;
        this.abstract = null;
        this.accepted = false;
    }

    getPath() { return this.path; }
    getTitle() { return this.title; }
    getTopic() { return this.topic; }
    getAuthorId() { return this.authorId; }
    getCoAuthor() { return this.coAuthor; }
    getKeywords() { return this.keywords; }
    getAbstract() { return this.abstract; }
    isAccepted() { return this.accepted; }

    setPath(newPath) { this.path = newPath; }
    setTitle(newTitle) { this.title = newTitle; }
    setTopic(newTopic) { this.topic = newTopic; }
    setAuthorId(newAuthorId) { this.authorId = newAuthorId; }
    setCoAuthor(newCoAuthor) { this.coAuthor = newCoAuthor !== '' ?  newCoAuthor : null; }
    setKeywords(newKeywords) { this.keywords = newKeywords; }
    setAbstract(newAbstract) { this.abstract = newAbstract !== '' ?  newAbstract : null; }
    acceptPaper() { this.accepted = true; }

    toFirestore() {
        return {
            path: this.path,
            title: this.title,
            topic: this.topic,
            authorId: this.authorId,
            coAuthor: this.coAuthor,
            keywords: this.keywords,
            abstract: this.abstract,
            accepted: this.accepted
        };

    }

    static fromFirestore(Object) {
        return new Paper(
            Object.path,
            Object.title,
            Object.topic,
            Object.authorId,
            Object.coAuthor,
            Object.keywords,
            Object.abstract,
            Object.accepted
        )
    }
}

exports.Paper = Paper;