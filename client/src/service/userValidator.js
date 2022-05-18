const { admin } = require('../config/firebaseConfig');

class UserValidator {
    static async getUserData(idToken) {
        try {
            const userData = await admin.auth().verifyIdToken(idToken);

            return {
                'uid': userData.uid,
                'role': userData.role
            };
        } catch(error) {
            throw Error('Invalid user!')
        }
    }
}

exports.UserValidator = UserValidator;