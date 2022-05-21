class Conference {
    #id         // is an id needed for the conference since it is only one?
    #name
    #url
    #subtitles  // list?
    #chairId    // TODO: ask if we should use the id of the chair or the chair
    #deadlines  // map of all the deadlines regarding the conference ( paperSubmissionDL, paperReviewDL, ...)

    constructor(id, name, url, subtitles, chairId, deadlines) {
        this.#id = id;
        this.#name = name;
        this.#url = url;
        this.#subtitles = subtitles;
        this.#chairId = chairId;
        this.#deadlines = deadlines;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getUrl() {
        return this.#url;
    }

    getSubtitles() {
        return this.#subtitles;
    }

    getChairId() {
        return this.#chairId;
    }

    getDeadlines() {
        return this.#deadlines;
    }

    setName(newName) {
        this.#name = newName;
    }

    setUrl(newUrl) {
        this.#url = newUrl;
    }

    setSubtitles(newSubtitles) {
        this.#subtitles = newSubtitles;
    }

    setChairId(newChairId) {
        this.#chairId = newChairId;
    }

    setDeadlines(newDeadlines) {
        this.#deadlines = newDeadlines;
    }

    toString() {
        //todo
    }

    toFirestore() {
        return {
            name: this.#name,
            url: this.#url,
            date: this.#date,
            chairId: this.#chairId,
            topics: this.#topics,
            dlPaperSubmission: this.#deadlines.get('dlPaperSubmission'),
            dlPaperReview: this.#deadlines.get('dlPaperReview'),
            dlPaperAccept: this.#deadlines.get('dlPaperAccept'),
            dlCameraReady: this.#deadlines.get('dlCameraReady'),
        }
    }

    static fromFirestore(conferenceId, Object) {
        let deadlines = new Map();
        deadlines.set('dlPaperSubmission', Object.dlPaperSubmission);
        deadlines.set('dlPaperReview', Object.dlPaperReview);
        deadlines.set('dlPaperAccept', Object.dlPaperAccept);
        deadlines.set('dlCameraReady', Object.dlCameraReady);

        return new Conference(conferenceId, Object.name, Object.url, Object.date, Object.topics, Object.chairId, deadlines);
    }
}

exports.Conference = Conference;