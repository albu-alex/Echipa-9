const { UserManager } = require('./userManager');
const { PaperManager } = require('./paperManager');
const { UserValidator } = require('./userValidator');

class AppService {
    constructor() {
        this.userManager = new UserManager();
        this.paperManager = new PaperManager();
    }

    async signIn(idToken) {
        const userData = await UserValidator.getUserData(idToken);
        console.log(userData);

        await this.userManager.signIn(userData.uid);
    }

    async signUp(idToken, name, email, type) {
        const userData = await UserValidator.getUserData(idToken);
        console.log(userData);

        await this.userManager.signUp(userData.uid, name, email, type);
    }

    async uploadPaper(idToken, paperDataJSON, paper) {
        const userData = await this.hasRole(idToken, 'author');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not upload papers!`);
        }

        const firebasePath = await this.paperManager.uploadToFirebase(paper.buffer, paper.originalname);
        console.log(firebasePath);

        paperDataJSON.path = firebasePath;
        const paperId = await this.paperManager.uploadPaperData(userData.uid, paperDataJSON);
        console.log(`Added paper with ID: ${paperId}`);
    }

    async getPapers(idToken) {
        const userData = await this.hasRole(idToken, 'reviewer');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not get all papers!`);
        }

        return await this.paperManager.getPapersFull();
    }

    async getPaperReviews(idToken, paperId) {
        const userData = await this.hasRole(idToken, 'chair');
        if (userData == null) {
            throw Error(`User with ID: ${idToken} can not get all papers!`);
        }

        return await this.paperManager.getPaperReviews(paperId);
    }

    async addReview(idToken, review, paperId) {
        const userData = await this.hasRole(idToken, 'reviewer');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not review papers!`);
        }

        const reviewerId = userData.uid;

        await this.paperManager.addReview(reviewerId, paperId, review);
        console.log(`added review ${review} to paper ${paperId} by reviewer ${reviewerId}`);
    }

    async updateUserInformation(idToken, firstName, surname, phoneNo, webpage, topics) {
        const userData = await UserValidator.getUserData(idToken);
        const userId = userData.uid;

        await this.userManager.updateUserInformation(userId, firstName, surname, phoneNo, webpage, topics);

        // console.log(`updated the information for the user with id ${userId}:
        //  \n\tfirst name: ${firstName}
        //  \n\tsurname: ${surname}
        //  \n\tphone number: ${phoneNo}
        //  \n\temail: ${email}
        //  \n\twebpage: ${webpage}
        //  \n\ttopics: ${topics}`);
    }

    async updateConferenceInformation(idToken, conferenceId, name, date, url, topics, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady) {
        const userData = await this.hasRole(idToken, 'chair');
        if(userData === null) {
            throw Error(`User with ID: ${idToken} can not review papers!`);
        }

        const chairId = userData.uid;
        await this.userManager.updateConferenceInformation(chairId, conferenceId, name, date, url, topics, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady);
    }

    async hasRole(idToken, role) {
        const userData = await UserValidator.getUserData(idToken);
        if (userData.role === role) {
            return userData;
        }
        return null;
    }
}

exports.AppService = AppService;