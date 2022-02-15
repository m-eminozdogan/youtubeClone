// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9VGOT-G551_8gQZWoazgioPUSXDWJtnk",
  authDomain: "clone-45734.firebaseapp.com",
  projectId: "clone-45734",
  storageBucket: "clone-45734.appspot.com",
  messagingSenderId: "555828349287",
  appId: "1:555828349287:web:f712044345bf2a8b7907c2",
  measurementId: "G-KYV8ZNSED4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
const auth = getAuth();
//const analytics = getAnalytics(app);

export { auth, provider };
