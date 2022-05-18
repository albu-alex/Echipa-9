const { Repository } = require('../repository/repository');
const { PaperService } = require('./paperService');

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


    uploadPaper(data, filename) {
        PaperService.uploadPaper(data, filename);
    }


    downloadPaper(paperPath) {
        return PaperService.downloadPaper(paperPath, localPath);
    }
}

exports.Service = Service;