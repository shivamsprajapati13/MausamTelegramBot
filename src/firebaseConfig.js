
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "ADD YOUR APIKEY",
    authDomain: "REMOVED",
    projectId: "REMOVED",
    storageBucket: "REMOVED",
    messagingSenderId: "REMOVED",
    appId: "REMOVED",
    measurementId: "REMOVED"
  };
   


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {db};
