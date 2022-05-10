class Paper {
    #id;
    #title;
    #keywords;  // set of strings
    #format;    // for now it will be just "pdf"
    #accepted;  // bool, if the paper was accepted by the chair at the conference
    // TODO: abstract of a paper, camera ready copy

    #authorId;
    #reviews;   // map with key reviewerId and value the review itself as a string


    constructor(id, title, format, authorId) {
        this.#id = id;
        this.#title = title;
        this.#keywords = new Set();
        this.#format = format;
        this.#accepted = null;
        this.#authorId = authorId;
        this.#reviews = new Map();
    }


    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get keywords() {
        return this.#keywords;
    }

    set keywords(value) {
        this.#keywords = value;
    }

    get format() {
        return this.#format;
    }

    set format(value) {
        this.#format = value;
    }

    get accepted() {
        return this.#accepted;
    }

    set accepted(value) {
        this.#accepted = value;
    }

    get authorId() {
        return this.#authorId;
    }

    set authorId(value) {
        this.#authorId = value;
    }

    get reviews() {
        return this.#reviews;
    }

    set reviews(value) {
        this.#reviews = value;
    }

    addReview(reviewerId, review) {
        // TODO: check if reviewer already submitted a review
        this.#reviews.set(reviewerId, review);
    }

    toString() {
        return `Title: ${this.#title} | Author id: ${this.#authorId}`
    }

    toFirestore() {
        return {
            title: this.#title,
            keywords: this.#keywords,
            format: this.#format,
            accepted: this.#accepted,
            authorId: this.#authorId,
            reviews: this.#reviews
        }
    }

    static fromFirestore(Object) {
        let paper = new Paper(Object.title, Object.format, Object.authorId);
        paper.keywords = Object.keywords;
        paper.accepted = Object.accepted;
        paper.reviews = Object.reviews;

        return paper;
    }
}

exports.Paper = Paper