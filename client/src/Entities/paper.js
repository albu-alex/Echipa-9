class Paper {
    constructor(path, title, topic, keywords, abstract, accepted = false) {
        this.path = path;
        this.title = title;
        this.topic = topic;
        this.keywords = keywords;
        this.abstract = abstract;
        this.accepted = accepted;
    }

    getPath() { return this.path; }

    toFirestore() {
        return {
            path: this.path,
            title: this.title,
            topic: this.topic,
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
            Object.keywords,
            Object.abstract,
            Object.accepted
        )
    }
}