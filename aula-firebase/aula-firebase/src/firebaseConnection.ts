// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_5NCPnr710megFecenktw3XCHQYjzpws",
  authDomain: "aula-firebase-5a9a1.firebaseapp.com",
  projectId: "aula-firebase-5a9a1",
  storageBucket: "aula-firebase-5a9a1.firebasestorage.app",
  messagingSenderId: "1077659033871",
  appId: "1:1077659033871:web:fd7b371c32ac5e90e8de7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };