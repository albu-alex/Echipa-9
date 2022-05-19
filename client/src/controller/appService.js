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
        if(userData === null) {
            throw Error(`User with ID: ${idToken} can not upload papers!`);
        }

        const firebasePath = await this.paperManager.uploadToFirebase(paper.buffer, paper.originalname);
        console.log(firebasePath);

        paperDataJSON.path = firebasePath;
        const paperId = await this.paperManager.uploadPaperData(userData.uid, paperDataJSON);
        console.log(`Added paper with ID: ${paperId}`);
    }

    async hasRole(idToken, role) {
        const userData = await UserValidator.getUserData(idToken);
        if(userData.role === role) {
            return userData;
        }
        return null;
    }
}

exports.AppService = AppService;