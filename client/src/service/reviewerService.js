const { Service } = require('./service')
const {Repository} = require('../repository/repository');
const { Paper } = require('../Entities/paper')

class ReviewerService extends Service {

    constructor(repositoryChair: Repository, repositoryAuthor: Repository, repositoryPaper: Repository, repositoryReviewer: Repository) {
        super(repositoryChair, repositoryAuthor, repositoryPaper, repositoryReviewer);
    }

    addReviewToPaper(reviewerId, paperId, review) {
        let reviewer = this._repositoryReviewer.getOne(reviewerId);
        let paper: Paper = this._repositoryPaper.getOne(paperId);
        paper.addReview(reviewerId, review)

        // TODO: ask why the methods are underlined!
    }
}