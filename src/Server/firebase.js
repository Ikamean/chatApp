import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyAp5Aw52xfa8S2Ug3KlVibj3Y6e_GcuWqY",
    authDomain: "superchat-6f37a.firebaseapp.com",
    projectId: "superchat-6f37a",
    storageBucket: "superchat-6f37a.appspot.com",
    messagingSenderId: "210631580229",
    appId: "1:210631580229:web:37f05ea630bfc57d13612c"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
