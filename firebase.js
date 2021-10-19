import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAE-ala41SSH92Q8Z3Kyapdz-5yoeImIsk",
    authDomain: "gdocs-ecb53.firebaseapp.com",
    projectId: "gdocs-ecb53",
    storageBucket: "gdocs-ecb53.appspot.com",
    messagingSenderId: "62398892501",
    appId: "1:62398892501:web:9f873e37544ae3be38d55c"
  };
  
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firebase();

export {db}