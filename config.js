import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJOIOHYQYpwQKA-ad2hlO0g1S9Ij3K9Kk",
    authDomain: "e-ride-a1c42.firebaseapp.com",
    projectId: "e-ride-a1c42",
    storageBucket: "e-ride-a1c42.appspot.com",
    messagingSenderId: "115294798484",
    appId: "1:115294798484:web:8faaebe5378a2b925b2a81"
  };    
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
