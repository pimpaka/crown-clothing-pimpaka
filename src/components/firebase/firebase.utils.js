import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBKiuxHHKwNhh_MuJi4JH4lbGay0HWw-xo",
  authDomain: "crown-db-68567.firebaseapp.com",
  databaseURL: "https://crown-db-68567.firebaseio.com",
  projectId: "crown-db-68567",
  storageBucket: "crown-db-68567.appspot.com",
  messagingSenderId: "442455049918",
  appId: "1:442455049918:web:29ac38d8237b82d738c0ef",
  measurementId: "G-QZLEH7PBT9",
};

export const createdUserProfileDocument = async (userAuth, additionalData) => {
  // console.log(userAuth);
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
