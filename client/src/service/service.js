const { Repository } = require('../repository/repository');

class Service {

    #repositoryChair;
    #repositoryAuthor;
    #repositoryPaper;
    #repositoryReviewer;

    constructor(repositoryChair, repositoryAuthor, repositoryPaper, repositoryReviewer) {
        this.#repositoryChair = repositoryChair;
        this.#repositoryAuthor = repositoryAuthor;
        this.#repositoryPaper = repositoryPaper;
        this.#repositoryReviewer = repositoryReviewer;
    }

    get repositoryChair() {
        return this.#repositoryChair;
    }

    set repositoryChair(value) {
        this.#repositoryChair = value;
    }

    get repositoryAuthor() {
        return this.#repositoryAuthor;
    }

    set repositoryAuthor(value) {
        this.#repositoryAuthor = value;
    }

    get repositoryPaper() {
        return this.#repositoryPaper;
    }

    set repositoryPaper(value) {
        this.#repositoryPaper = value;
    }

    get repositoryReviewer() {
        return this.#repositoryReviewer;
    }

    set repositoryReviewer(value) {
        this.#repositoryReviewer = value;
    }

// getRepositoryClient() {
    //     return this.#repositoryChair;
    // }
    //
    // getRepositoryAuthor() {
    //     return this.repositoryAuthor;
    // }
    //
    // getRepositoryPaper() {
    //     return this.repositoryPaper;
    // }
    //
    // getRepositoryReviewer() {
    //     return this.repositoryReviewer;
    // }
    //
    // setRepositoryClient(newRepository) {
    //     this.repositoryChair = newRepository;
    // }
    //
    // setRepositoryAuthor(newRepository) {
    //     this.repositoryAuthor= newRepository;
    // }
    //
    // setRepositoryPaper(newRepository) {
    //     this.repositoryPaper = newRepository;
    // }
    // setRepositoryReviewer(newRepository) {
    //     this.repositoryReviewer = newRepository;
    // }
}

exports.Service = Service;