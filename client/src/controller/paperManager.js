const { db } = require('../config/firebaseConfig');
const {storageRef } = require('../config/firebaseConfig');

const { Paper } = require('../Entities/paper');

const { v4: uuidv4 } = require('uuid');

class PaperManager {
    constructor() {
        this.collection = 'Papers';
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

        const result = await db.collection(this.collection).add(paper.toFirestore());
        return result.id;
    }

    async addReview(reviewerId, paperId, reviewText) {
        const userRef = db.collection(this.collection).doc(paperId);
        const doc = await userRef.get();
        let paper = Paper.fromFirestore(doc.data());

        paper.addReview(reviewerId, reviewText);
        await db.collection(this.collection).doc(paperId).set(paper.toFirestore());
    }

    async addComment(reviewrId, paperId, commentText){
        const userRef = db.collection(this.collection).doc(paperId);
        const doc = await userRef.get();
        let paper = Paper.fromFirestore(doc.data());

        paper.addComment(reviewrId, commentText);
        await db.collection(this.collection).doc(paperId).set(paper.toFirestore());
    }

    async getPapers() {
        const papersRef = db.collection(this.collection);
        const snapshot = await papersRef.get();

        let papers = [];
        snapshot.forEach(doc => {
            let data = doc.data();
            data['id'] = doc.id;

            papers.push(data);
        });

        return papers
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

    async getPaperReviews(paperId) {
        const papersRef = db.collection(this.collection).doc(paperId);
        const doc = await papersRef.get();

        if (!doc.exists) {
            return null;
        }

        const paper = Paper.fromFirestore(doc.data());
        return paper.reviews;
    }

    async getPaperComments(paperId) {
        const papersRef = db.collection(this.collection).doc(paperId);
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

    // const userRef = db.collection('Papers').doc('b1UYIPsqtUnqWyNTgxyc');
    // const doc = await userRef.get();
    //
    // const paper = Paper.fromFirestore(doc.data());
    // console.log(paper.getReviews());

    // test getPaperReviews :)
    // const reviews = await pm.getPaperReviews('C9NisMpZSeh5wL7lBZ3H');
    // console.log([...reviews.entries()]);
// }

// test();

exports.PaperManager = PaperManager;