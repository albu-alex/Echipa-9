const { admin } = require('../config/firebaseConfig');

class UserValidator {
    static async getUserData(idToken) {
        const result = await admin.auth().verifyIdToken(idToken);
        
        return { 
            'role': result.role,
            'uid': result.uid
        };
    }
}

exports.UserValidator = UserValidator;