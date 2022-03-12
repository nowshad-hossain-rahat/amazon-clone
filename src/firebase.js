import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajmF20HCJco40MwvZFMu2gW5zbV5eM0Y",
  authDomain: "clone-6539e.firebaseapp.com",
  projectId: "clone-6539e",
  storageBucket: "clone-6539e.appspot.com",
  messagingSenderId: "328002027171",
  appId: "1:328002027171:web:2566beb044402d3a92c916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {app, db, auth}