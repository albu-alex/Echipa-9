const { User } = require('../Entities/user');
const { db } = require('../config/firebaseConfig');

class UserManager {
    constructor() {
        this.collection = 'Users';
        this.users = [];
    }

    async manageNewConnection(uid, ...args) {
        let user = await this.getUser(uid);

        if(user == null) {
            user = await this.setUser(uid, args);
        }
        this.users.push(user);

        return user;
    }

    async getUser(uid) {
        const userRef = db.collection(this.collection).doc(uid);
        const doc = await userRef.get()

        if(!doc.exists) {
            return null;
        }

        return User.fromFirestore(doc.data());
    }

    async setUser(uid, args) {
        let user = new User(...args);

        await db.collection(this.collection).doc(uid).set(user.toFirestore());

        return user;
    }
}

exports.UserManager = UserManager;