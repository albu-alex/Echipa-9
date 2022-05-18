const { Repository } = require('../repository/repository');
const { PaperService } = require('./paperService');

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


    uploadPaper(data, filename) {
        PaperService.uploadPaper(data, filename);
    }


    downloadPaper(paperPath) {
        return PaperService.downloadPaper(paperPath, localPath);
    }
}

exports.Service = Service;