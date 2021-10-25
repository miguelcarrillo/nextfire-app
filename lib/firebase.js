import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCxi0PHjGQou2L6f5Mk50kTl0oHcDf2bSk",
    authDomain: "mk-nextdev.firebaseapp.com",
    projectId: "mk-nextdev",
    storageBucket: "mk-nextdev.appspot.com",
    messagingSenderId: "663332844000",
    appId: "1:663332844000:web:1bff3b1f4defc457d2fb85"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();