const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json') // ! File ignored by git (Echipa-9/server/src/config/serviceAccount.json)

const { getFirestore } = require('firebase-admin/firestore');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://echipa-9-default-rtdb.europe-west1.firebasedatabase.app"
});

exports.admin = admin;
exports.db = getFirestore();