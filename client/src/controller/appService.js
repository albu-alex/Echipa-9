const { UserManager } = require('./userManager');
const { PaperManager } = require('./paperManager');
const { UserValidator } = require('./userValidator');
const { Timestamp } = require('firebase-admin/firestore');

class AppService {
    constructor() {
        this.userManager = new UserManager();
        this.paperManager = new PaperManager();
    }

    async signIn(idToken) {
        const userData = await UserValidator.getUserData(idToken);
        console.log(userData);

        return await this.userManager.signIn(userData.uid);
    }

    async signUp(idToken, name, email, type) {
        const userData = await UserValidator.getUserData(idToken);
        console.log(userData);

        return await this.userManager.signUp(userData.uid, name, email, type);
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

    async getPaperLink(idToken, paperId) {
        const userData = await this.hasRoles(idToken, ['reviewer', 'chair']);
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not get all papers!`);
        }

        return await this.paperManager.getPaperLink(paperId);
    }
  
    async getUsersByType(type) {
        return await this.userManager.getUsersByType(type);
    }

    async getPapers(idToken) {
        const userData = await this.hasRole(idToken, 'reviewer');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not get all papers!`);
        }

        return await this.paperManager.getPapersFull();
    }

    async getSessions(idToken, conferenceId) {
        const userData = await this.hasRole(idToken, 'chair');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not get all sessions!`);
        }

        return await this.paperManager.getSessions(conferenceId);
    }

    async getTopics(idToken, conferenceId){
        const userData = await this.hasRole(idToken, 'chair');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not get all topics of the conference!`);
        }

        return await this.userManager.getTopics(conferenceId);

    }

    async getPaperReviews(idToken, paperId) {
        const userData = await this.hasRole(idToken, 'chair');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not get all reviews!`);
        }

        return await this.paperManager.getPaperReviews(paperId);
    }

    async getPaperComments(idToken, paperId) {
        const userData = await this.hasRole(idToken, 'reviewer');
        if(userData === null) {
            throw Error(`User with ID: ${idToken} cannot see paper comments!`);
        }

        return await this.paperManager.getPaperComments(paperId);
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

    async addComment(idToken, comment, paperId){
        const userData = await this.hasRole(idToken, 'reviewer');
        if(userData === null){
            throw Error(`User with ID: ${idToken} can not add comments to papers!`);
        }

        const reviewerId = userData.uid;
        await this.paperManager.addComment(reviewerId, paperId, comment);
        console.log(`added comment ${comment} to paper ${paperId} by reviewer ${reviewerId}`);
    }

    async addSession(idToken, conferenceId, name) {
        const userData = await this.hasRole(idToken, 'chair');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not add session to conference!`);
        }

        const chairId = userData.uid;
        const sessionId = await this.paperManager.addSession(conferenceId, name);
        console.log(`added session ${sessionId} : ${name} to conference ${conferenceId} by chair ${chairId}`);
    }
    async acceptPaper(idToken, paperId){
        const userData = await this.hasRole(idToken, 'chair');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not accept papers!`);
        }

        await this.paperManager.acceptPaper(paperId)
        console.log(`accepted paper ${paperId}`);
    }

    async addPaperToSession(idToken, paperId, sessionId) {
        const userData = await this.hasRole(idToken, 'chair');
        if (userData === null) {
            throw Error(`User with ID: ${idToken} can not add paper to session!`);
        }

        const chairId = userData.uid;

        await this.paperManager.addPaperToSession(sessionId, paperId);
        console.log(`added paper ${paperId} to session ${sessionId} by chair ${chairId}`);
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

    async hasRoles(idToken, roles) {
        const userData = await UserValidator.getUserData(idToken);
        for(const role of roles) {
            if(userData.role == role) {
                return userData;
            }
        }
        return null;
    }
}

exports.AppService = AppService;