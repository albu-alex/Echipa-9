const { admin } = require('../config/firebaseConfig');
const { db } = require('../config/firebaseConfig');
const {Conference} = require("../Entities/conference");
const { User } = require('../Entities/user');

class UserManager {
    constructor() {
        this.collection = 'Users';
        this.conferencesCollection = 'Conferences';
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
        const doc = await userRef.get();

        if (!doc.exists) {
            return null;
        }

        return User.fromFirestore(uid, doc.data());
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


    async updateConferenceInformation(chairId, conferenceId, name, date, url, topics, dlPaperSubmission, dlPaperReview, dlPaperAccept, dlCameraReady) {
        const conferenceRef = db.collection(this.conferencesCollection).doc(conferenceId);
        await conferenceRef.update(
            {
                name: name,
                date: date,
                url: url,
                topics: topics,
                dlPaperSubmission: dlPaperSubmission,
                dlPaperReview: dlPaperReview,
                dlPaperAccept: dlPaperAccept,
                dlCameraReady: dlCameraReady,
                chairId: chairId
            }
        );

        const doc = await conferenceRef.get();

        if(!doc.exists) {
            return null;
        }

        let conference = Conference.fromFirestore(conferenceId, doc.data());

        // console.log(conference.toString());

        return conference;
    }


    async updateUserInformation(userId, firstName, surname, phoneNo, webpage, topics) {
        const userRef = db.collection(this.collection).doc(userId);
        await userRef.update(
            {
                name: `${firstName}  ${surname}`,
                phoneNumber: phoneNo,
                address: webpage,
            }
        )


        const doc = await userRef.get();

        if (!doc.exists) {
            return null;
        }

        return User.fromFirestore(userId, doc.data());
    }

    async getAuthors() {
        const usersRef = db.collection(this.collection);

        const authorsQuery = query(usersRef, where("type", "==", "author"));
        const querySnapshot = await getDocs(authorsQuery);

        let authors = [];
        querySnapshot.forEach(doc => {
            let data = doc.data();
            data['id'] = doc.id;
            authors.push(data);
        });
        return authors;
    }
}

// async function test() {
//     const um = new UserManager();
//     let u = await um.updateUserInformation('TQDePfXlaUWhsACzIJ5bosuawpK2', 'Teo', 'Arsene', '0727432037', 'teo.author@test.com', 'www.teodoraarsene.com', 'nodejs:)');
//     console.log(u)
//     // um.getUser('TQDePfXlaUWhsACzIJ5bosuawpK2')
// }
// test()
exports.UserManager = UserManager;