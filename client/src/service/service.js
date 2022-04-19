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

    getRepositoryClient() {
        return this.repositoryChair;
    }

    getRepositoryAuthor() {
        return this.repositoryAuthor;
    }

    getRepositoryPaper() {
        return this.repositoryPaper;
    }

    getRepositoryReviewer() {
        return this.repositoryReviewer;
    }

    setRepositoryClient(newRepository) {
        this.repositoryChair = newRepository;
    }

    setRepositoryAuthor(newRepository) {
        this.repositoryAuthor= newRepository;
    }

    setRepositoryPaper(newRepository) {
        this.repositoryPaper = newRepository;
    }
    setRepositoryReviewer(newRepository) {
        this.repositoryReviewer = newRepository;
    }
}

exports.Service = Service;