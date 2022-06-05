const {storageRef } = require('../config/firebaseConfig');
const { v4: uuidv4 } = require('uuid');

class PaperService {
    static async uploadPaper(data, filename) {
        //const imageBuffer = new Uint8Array(data);

        await storageRef.upload(data, {
            public: true,
            gzip: true,
            destination: `papers/${filename}`,
            metadata: {
                firebaseStorageDownloadTokens: uuidv4(),
                cacheControl: 'public, max-age=31536000'
            }
        });
    
        return `papers/${filename}`;
    }

    static async downloadPaper(storagePath, localPath) {
        const options = {
            destination: localPath,
        };
    
        const res = await storageRef.file(storagePath).getSignedUrl({action: 'read', expires: '03-09-2491'});
        return res;
    }
}



(async() => {
    //const path = await PaperService.uploadPaper('D:\\etc\\UBB_FMI\\Sem 4\\SE\\test.txt', 'test.txt');
    const res = await PaperService.downloadPaper('papers/sample.pdf', 'D:\\UBB_FMI\\Sem 4\\ISS\\test_downloaded.txt');
    console.log(res);
})();