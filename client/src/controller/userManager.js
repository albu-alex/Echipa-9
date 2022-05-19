const { admin } = require('../config/firebaseConfig');
const { db } = require('../config/firebaseConfig');

const { User } = require('../Entities/user');

class UserManager {
    constructor() {
        this.collection = 'Users';
    }

    async signIn(uid) {
        const user = await this.getUser(uid);
        console.log(`>>> SignedIn: ${uid} | ${user.getName()} | ${user.getEmail()} | ${user.getType()}`);
    }

    async signUp(uid, name, email, type) {
        const user = await this.setUser(uid, name, email, type);
        console.log(`>>> SignedUp: ${uid} | ${user.getName()} | ${user.getEmail()} | ${user.getType()}`);

        const status = await this.setUserRole(uid, user.getType());
        console.log(status.message);
    }

    async getUser(uid) {
        const userRef = db.collection(this.collection).doc(uid);
        const doc = await userRef.get()

        if(!doc.exists) {
            return null;
        }

        return User.fromFirestore(doc.data());
    }

    async setUser(uid, name, email, type) {
        let user = new User(uid, name, email, type);
        await db.collection(this.collection).doc(uid).set(user.toFirestore());

        return user;
    }

    async setUserRole(uid, type) {
        return admin
            .auth()
            .setCustomUserClaims(uid, { role: type })
            .then(() => {
                return {
                    message: `Success! ${uid} has been made a/an ${type}`
                };
            }).catch(error => {
                return error;
            });
    };
}

exports.UserManager = UserManager;