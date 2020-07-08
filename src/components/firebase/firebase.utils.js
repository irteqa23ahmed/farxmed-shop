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

export const createUserProfileDocument = async (authUser, otherDetails) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists){
    const {displayName, email} = authUser;
    const createdAt = new Date();
    
    try{
      userRef.set({
        displayName,
        email,
        createdAt,
        ...otherDetails
      });
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
