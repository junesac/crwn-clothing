import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAy1a2EsfV3mUI-31bjo7ekisS0PkrtrDk',
    authDomain: 'crwn-db-463d1.firebaseapp.com',
    databaseURL: 'https://crwn-db-463d1.firebaseio.com',
    projectId: 'crwn-db-463d1',
    storageBucket: 'crwn-db-463d1.appspot.com',
    messagingSenderId: '717997736605',
    appId: '1:717997736605:web:d098bab0047ce3e6c40a74',
    measurementId: 'G-GX7L940B9S'
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

// for firebase authetication
export const auth = firebase.auth();

// for firebase DB
export const firestore = firebase.firestore();

// for Google authentication & sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
