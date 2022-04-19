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
}