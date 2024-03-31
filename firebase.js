import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAtlHMoq4VwGfkS8rgC10nzmUDz9jGmGWk",
  authDomain: "gdox-38409.firebaseapp.com",
  projectId: "gdox-38409",
  storageBucket: "gdox-38409.appspot.com",
  messagingSenderId: "689615576765",
  appId: "1:689615576765:web:3ecab3006aadcaa3fb61d4",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, storage, serverTimestamp };
