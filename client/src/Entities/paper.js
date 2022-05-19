class Paper {
    constructor() {
        this.path = null;
        this.title = null;
        this.topic = null;
        this.authorId = null;
        this.coAuthor = null;
        this.keywords = null;
        this.abstract = null;
        this.reviews = new Map();
        this.accepted = false;
    }

    getPath() { return this.path; }
    getTitle() { return this.title; }
    getTopic() { return this.topic; }
    getAuthorId() { return this.authorId; }
    getCoAuthor() { return this.coAuthor; }
    getKeywords() { return this.keywords; }
    getAbstract() { return this.abstract; }
    getReviews() { return this.reviews; }
    isAccepted() { return this.accepted; }

    addReview(reviewerId, review) {
        this.reviews.set(reviewerId, review);
    }

    setPath(newPath) { this.path = newPath; }
    setTitle(newTitle) { this.title = newTitle; }
    setTopic(newTopic) { this.topic = newTopic; }
    setAuthorId(newAuthorId) { this.authorId = newAuthorId; }
    setCoAuthor(newCoAuthor) { this.coAuthor = newCoAuthor !== '' ?  newCoAuthor : null; }
    setKeywords(newKeywords) { this.keywords = newKeywords; }
    setAbstract(newAbstract) { this.abstract = newAbstract !== '' ?  newAbstract : null; }
    setReviews(newReviews) { this.reviews = newReviews; }
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
            reviews: Object.fromEntries(this.reviews),
            accepted: this.accepted
        };

    }

    static fromFirestore(Object) {
        let paper = new Paper();
        paper.setPath(Object.path);
        paper.setTitle(Object.title);
        paper.setTopic(Object.topic);
        paper.setAuthorId(Object.authorId);
        paper.setCoAuthor(Object.coAuthor);
        paper.setKeywords(Object.keywords);
        paper.setAbstract(Object.abstract);

        const reviews = Object.reviews;
        for(const key in reviews) {
            paper.addReview(key, reviews[key])
        }

        return paper;
    }
}

exports.Paper = Paper;