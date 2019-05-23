const firebase = require("firebase/app");
require("firebase/database");

const apis = {
  apiKey: "AIzaSyCE6-PAF2G9pCoapYm5ANPovtbiIjl2Mgo",
  authDomain: "swp-final-exam-49609.firebaseapp.com",
  apiKey: "AIzaSyD1d1iuLADGxS10TUReUY27rGQJpX6NLXE",
    authDomain: "finalswp-241511.firebaseapp.com",
    databaseURL: "https://finalswp-241511.firebaseio.com",
    projectId: "finalswp-241511",
    storageBucket: "finalswp-241511.appspot.com",
    messagingSenderId: "1023835823721",
    appId: "1:1023835823721:web:a66554b10c1dd88f"
};

firebase.initializeApp(apis);

const push = value => {
  firebase
    .database()
    .ref("/database")
    .push(value);
};

module.exports = {
  push
};
