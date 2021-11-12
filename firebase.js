import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyA-_aDVV5HoT7y3G5QCrOoTpRqoZZ_6370",
  authDomain: "gdocs-app-e001f.firebaseapp.com",
  databaseURL: "https://gdocs-app-e001f-default-rtdb.firebaseio.com",
  projectId: "gdocs-app-e001f",
  storageBucket: "gdocs-app-e001f.appspot.com",
  messagingSenderId: "741843979821",
  appId: "1:741843979821:web:d24a8a0ac44a7341ac72a4"
};


if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, storage, serverTimestamp }