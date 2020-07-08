import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfly94O-d77ImhiNYRCazsyuAy9NOUHvo",
    authDomain: "farxmed-db.firebaseapp.com",
    databaseURL: "https://farxmed-db.firebaseio.com",
    projectId: "farxmed-db",
    storageBucket: "farxmed-db.appspot.com",
    messagingSenderId: "946148591259",
    appId: "1:946148591259:web:65858a58b523e1005e683e",
    measurementId: "G-156CDJ9H6T"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
