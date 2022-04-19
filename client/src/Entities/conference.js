class Conference {
    #id         // is an id needed for the conference since it is only one?
    #name
    #url
    #topicsOfInterest  // list
    #chairId    // TODO: ask if we should use the id of the chair or the chair
    #deadlines  // map of all the deadlines regarding the conference ( paperSubmissionDL, paperReviewDL, ...)

    constructor(id, name, url, topicsOfInterest, chairId, deadlines) {
        this.#id = id;
        this.#name = name;
        this.#url = url;
        this.#topicsOfInterest = topicsOfInterest;
        this.#chairId = chairId;
        this.#deadlines = deadlines;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get url() {
        return this.#url;
    }

    set url(value) {
        this.#url = value;
    }

    get topicsOfInterest() {
        return this.#topicsOfInterest;
    }

    set topicsOfInterest(value) {
        this.#topicsOfInterest = value;
    }

    get chairId() {
        return this.#chairId;
    }

    set chairId(value) {
        this.#chairId = value;
    }

    get deadlines() {
        return this.#deadlines;
    }

    set deadlines(value) {
        this.#deadlines = value;
    }
}