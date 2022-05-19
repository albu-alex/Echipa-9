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
}

exports.PaperManager = PaperManager;