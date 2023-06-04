// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ydDdOexWUYRXQgZrwRWWe6S9yPGXHXA",
  authDomain: "quiz-cybersecurity.firebaseapp.com",
  projectId: "quiz-cybersecurity",
  storageBucket: "quiz-cybersecurity.appspot.com",
  messagingSenderId: "473257856137",
  appId: "1:473257856137:web:1e0efe252a5bf1c7314a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export la instancia de Firestore
export const firestore = getFirestore(app);