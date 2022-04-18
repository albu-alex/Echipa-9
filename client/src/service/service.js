const { Repository } = require('../repository/repository');

class Service {

    constructor() {
        this.repositoryClient = new Repository();
        this.repositoryAuthor = new Repository();
        this.repositoryPaper = new Repository();
        this.repositoryReviewer = new Repository();
    }

    getRepositoryClient() {
        return this.repositoryClient;
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
        this.repositoryClient = newRepository;
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