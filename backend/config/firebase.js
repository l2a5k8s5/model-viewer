const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "model-viewer-4fa86.appspot.com", // Change this if needed
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
