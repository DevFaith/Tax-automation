// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsIVaoe8PlEYrSjCih1QRip3XDrWj4u_A",
  authDomain: "tax-automation-ce2b2.firebaseapp.com",
  projectId: "tax-automation-ce2b2",
  storageBucket: "tax-automation-ce2b2.firebasestorage.app",
  messagingSenderId: "539272022011",
  appId: "1:539272022011:web:550035276bbf2b4636ed5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const database = getDatabase(app);
const functions = getFunctions(app);

export { db, storage, auth, database, functions }

export default app