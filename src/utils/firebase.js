import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfDRdne1pQATxnjKkrBcxuzmZo4TY1MqY",
    authDomain: "core-e-commerce.firebaseapp.com",
    projectId: "core-e-commerce",
    storageBucket: "core-e-commerce.appspot.com",
    messagingSenderId: "402656179067",
    appId: "1:402656179067:web:cb158e1914b777c2be83de"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

