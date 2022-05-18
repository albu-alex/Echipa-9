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
    
        await storageRef.file(storagePath).download(options)
    }
}



(async() => {
    const path = await PaperService.uploadPaper('D:\\etc\\UBB_FMI\\Sem 4\\SE\\test.txt', 'test.txt');
    await PaperService.downloadPaper(path, 'D:\\etc\\UBB_FMI\\Sem 4\\SE\\test_downloaded.txt');
})();