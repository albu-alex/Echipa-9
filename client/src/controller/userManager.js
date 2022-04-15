const { User } = require('../Entities/user');
const { db } = require('../config/firebaseConfig');

class UserManager {
    constructor() {
        this.collection = 'Users';
        this.users = new Map();
    }

    getUsers() {
        return this.users;
    }

    async manageNewConnection(uid, ...args) {
        if(this.isLoggedIn(uid)) {
            return this.users.get(uid);
        }

        let user = await this.getUser(uid);

        if(user == null) {
            user = await this.setUser(uid, args);
        }

        this.users.set(uid, user);
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

    async isAllowedToPerform(viewId) {
        const user = this.users.get(viewId);
    }

    isLoggedIn(uid) {
        return this.users.has(uid);
    }
}

exports.UserManager = UserManager;