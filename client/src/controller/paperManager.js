const { db } = require('../config/firebaseConfig');
const {storageRef } = require('../config/firebaseConfig');

const { Paper } = require('../Entities/paper');
const { Session } = require('../Entities/session')
const { v4: uuidv4 } = require('uuid');

class PaperManager {
    constructor() {
        this.papersCollection = 'Papers';
        this.sessionsCollection = 'Sessions';
    }

    async uploadToFirebase(paperBytes, filename) {
        const imageBuffer = new Uint8Array(paperBytes);

        let file = storageRef.file(`papers/${filename}`);
        await file.save(imageBuffer, {
            public: true,
            gzip: true,
            metadata: {
                firebaseStorageDownloadTokens: uuidv4(),
                cacheControl: 'public, max-age=31536000'
            }
        });

        return `papers/${filename}`;
    }

    async uploadPaperData(authorId, paperDataJSON) {
        let paper = new Paper();
        paper.setTitle(paperDataJSON.title);
        paper.setTopic(paperDataJSON.topic);
        paper.setAuthorId(authorId);
        paper.setCoAuthor(paperDataJSON.coAuthor);
        paper.setKeywords(paperDataJSON.keywords);
        paper.setAbstract(paperDataJSON.resume);
        paper.setPath(paperDataJSON.path);

        const result = await db.collection(this.papersCollection).add(paper.toFirestore());
        return result.id;
    }

    async addSession(conferenceId, name) {
        let session = new Session();
        session.setConferenceId(conferenceId);
        session.setName(name);

        const result = await db.collection(this.sessionsCollection).add(session.toFirestore());
        return result.id;
    }

    async addReview(reviewerId, paperId, reviewText) {
        const paperRef = db.collection(this.papersCollection).doc(paperId);
        const doc = await paperRef.get();
        let paper = Paper.fromFirestore(doc.data());

        paper.addReview(reviewerId, reviewText);
        await db.collection(this.papersCollection).doc(paperId).set(paper.toFirestore());
    }

    async addComment(reviewerId, paperId, commentText){
        const paperRef = db.collection(this.papersCollection).doc(paperId);
        const doc = await paperRef.get();
        let paper = Paper.fromFirestore(doc.data());

        paper.addComment(reviewerId, commentText);
        await db.collection(this.papersCollection).doc(paperId).set(paper.toFirestore());
    }

    async addPaperToSession(paperId, sessionId) {
        const sessionRef = db.collection(this.sessionsCollection).doc(sessionId);
        const doc = await sessionRef.get();
        let session = Session.fromFirestore(sessionId, doc.data());

        session.addPaper(paperId);
        await db.collection(this.sessionsCollection).doc(sessionId).set(session.toFirestore());
    }

    async getPapers() {
        const papersRef = db.collection(this.papersCollection);
        const snapshot = await papersRef.get();

        let papers = [];
        snapshot.forEach(doc => {
            let data = doc.data();
            data['id'] = doc.id;

            papers.push(data);
        });

        return papers;
    }

    async getPapersForAuthor(authorId) {
        const papersRef = db.collection(this.papersCollection);
        const papersQuery = await papersRef.where('authorId', '==', authorId).get();
        let papers = [];
        papersQuery.forEach(doc => {
            let data = doc.data();
            data['id'] = doc.id;
            papers.push(data);
        })
        return papers;
    }

    async getPapersForSession(session) {
        const papersRef = db.collection(this.papersCollection);
        const paperIds = session.papers;
        const papersQuery = await papersRef.where('__name__', 'in', paperIds).get();
        let papers = [];
        papersQuery.forEach(doc => {
            let data = doc.data();
            data['id'] = doc.id;
            papers.push(data);
        })
        return papers;
    }


    async getPapersFull() {
        let papers = await this.getPapers();

        for(let paper of papers) {
            const userRef = db.collection('Users').doc(paper.authorId);
            const doc = await userRef.get();
            
            paper['authorName'] = doc.data().name;
        }

        return '{"papers": ' + JSON.stringify(papers) + '}';
    }

    async getPaperLink(paperId) {
        const papersRef = db.collection(this.papersCollection).doc(paperId);
        const paper = await papersRef.get();
        const path = paper.data();

        console.log(path);

        const options = {
            action: 'read',
            expires: '03-09-2491'
        };

        const res =  await storageRef.file(paper.data().path).getSignedUrl(options);
        return res[0];
    }

    async getSessionByName(sessionName) {
        const sessionsRef = db.collection(this.sessionsCollection);
        const snapshot = await sessionsRef.where('name', '==', sessionName).get();

        if (snapshot.empty) {
            console.log(`no matching sessions with session name ${sessionName}`);
            return;
        }

        let session;
        snapshot.forEach(doc => {
            session = Session.fromFirestore(doc.id, doc.data());
        });
        return session;
    }

    async getSessions(conferenceId) {
        const sessionsRef = db.collection(this.sessionsCollection);
        const snapshot = await sessionsRef.get();

        let sessions = [];
        snapshot.forEach(doc => {
            if (doc.data().conferenceId === conferenceId) {
                let data = doc.data();
                data['id'] = doc.id;

                sessions.push(data);
            }
        });

        return sessions;
    }

    async getPaperReviews(paperId) {
        const papersRef = db.collection(this.papersCollection).doc(paperId);
        const doc = await papersRef.get();

        if (!doc.exists) {
            return null;
        }

        const paper = Paper.fromFirestore(doc.data());
        return paper.reviews;
    }

    async getPaperComments(paperId) {
        const papersRef = db.collection(this.papersCollection).doc(paperId);
        const doc = await papersRef.get();

        if(!doc.exists){
            return null;
        }

        const paper = Paper.fromFirestore(doc.data());
        return paper.comments;
    }
}

// async function test() {
//     const pm = new PaperManager();
    // await pm.addReview('lazzzlaID', 'b1UYIPsqtUnqWyNTgxyc', 'this is a new review!');
    // await pm.addReview('myID', 'b1UYIPsqtUnqWyNTgxyc', 'this is a new review! x2');
    //
    // const userRef = db.collection('Papers').doc('b1UYIPsqtUnqWyNTgxyc');
    // const doc = await userRef.get();
    //
    // const paper = Paper.fromFirestore(doc.data());
    // console.log(paper.getReviews());
    //
    // test getPaperReviews :)
    // const reviews = await pm.getPaperReviews('C9NisMpZSeh5wL7lBZ3H');
    // console.log([...reviews.entries()]);
    //
    // const sessionId = await pm.addSession('99PN0HXy9GmArJN67VIh', 'test-add-session');
    // console.log(sessionId);
    //
    // const sessions = await pm.getSessions('99PN0HXy9GmArJN67VIh');
    // console.log(sessions[0]);
    // console.log('...')
    // console.log(sessions[1]);
    //
    // await pm.addPaperToSession('CA27L3UTamWyZ4K2AKpa', 'j7ScMFnlleXAuqpUGZrO');
    // await pm.addPaperToSession('TPN4ahlWbLgHG1X5R0pU', 'j7ScMFnlleXAuqpUGZrO');
    // await pm.addPaperToSession('QIYtNSlcDsU8LFgrRIyA', 'j7ScMFnlleXAuqpUGZrO');

//     let session = await pm.getSessionByName('test-add-session');
//     console.log(session)
//     let papers = await pm.getPapersForSession(session);
//     console.log(papers)
// }
//
// test();

exports.PaperManager = PaperManager;