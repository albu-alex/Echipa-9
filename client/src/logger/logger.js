const fs = require('fs');

class Logger {
    constructor(logFile) {
        this.logFile = logFile;

        const date = new Date(Date.now());
        fs.appendFile(this.logFile, `[${date.toUTCString()}] SERVER STARTED\n`, error => {
            if(error) {
                console.error(error.message);
            }
        });
    }

    writeToFile(log) {
        const date = new Date(Date.now());

        fs.appendFile(this.logFile, `[${date.toUTCString()}] ${log}\n`, error => {
            if(error) {
                console.error(error.message);
            }
        });
    }

    log(log) {
        this.writeToFile(`LOG: ${log}`);
    }

    debug(log) {
        this.writeToFile(`DEBUG: ${log}`);
    }

    error(log) {
        this.writeToFile(`ERROR: ${log}`);
    }

    warning(log) {
        this.warnLog(`WARNING: ${log}`);
    }
}

exports.Logger = Logger;