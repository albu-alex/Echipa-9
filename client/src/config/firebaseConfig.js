const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json') // ! File ignored by git (Echipa-9/server/src/config/serviceAccount.json)

const { getFirestore } = require('firebase-admin/firestore');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://echipa-9-default-rtdb.europe-west1.firebasedatabase.app"
});

exports.admin = admin;
exports.db = getFirestore();

// const query = require('firebase-admin/firestore');
// exports.query = query;

// const where = require('firebase-admin/firestore');
// exports.where = where;

exports.bucketLocation = 'gs://echipa-9.appspot.com/papers/'
exports.storageRef = admin.storage().bucket('gs://echipa-9.appspot.com')