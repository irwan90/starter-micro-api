var admin = require("firebase-admin");
var serviceAccount = require("../serviceKey.json");

var firebaseSettings = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ginzakuproject1-default-rtdb.firebaseio.com"
});

module.exports = firebaseSettings;