const { Repository } = require('../repository/repository');

class Service {

    _repositoryChair: Repository;
    _repositoryAuthor: Repository;
    _repositoryPaper: Repository;
    _repositoryReviewer: Repository;

    constructor(repositoryChair: Repository, repositoryAuthor: Repository, repositoryPaper: Repository, repositoryReviewer: Repository) {
        this._repositoryChair = repositoryChair;
        this._repositoryAuthor = repositoryAuthor;
        this._repositoryPaper = repositoryPaper;
        this._repositoryReviewer = repositoryReviewer;
    }

    get repositoryChair() {
        return this._repositoryChair;
    }

    set repositoryChair(value) {
        this._repositoryChair = value;
    }

    get repositoryAuthor() {
        return this._repositoryAuthor;
    }

    set repositoryAuthor(value) {
        this._repositoryAuthor = value;
    }

    get repositoryPaper() {
        return this._repositoryPaper;
    }

    set repositoryPaper(value) {
        this._repositoryPaper = value;
    }

    get repositoryReviewer() {
        return this._repositoryReviewer;
    }

    set repositoryReviewer(value) {
        this._repositoryReviewer = value;
    }

// getRepositoryClient() {
//         return this._repositoryChair.;
//     }
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