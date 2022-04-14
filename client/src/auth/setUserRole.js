const { admin } = require('../config/firebaseConfig');

const setUserRole = function (uid, type) {
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

exports.setUserRole = setUserRole;