// src/firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // for db
import { getStorage } from "firebase/storage";      // for image upload
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBGJS0Jcl_CKhASC3_XOk6fMOFcG7CmC0",
  authDomain: "ws-bazaar.firebaseapp.com",
  projectId: "ws-bazaar",
  storageBucket: "ws-bazaar.appspot.com",
  messagingSenderId: "89767656961",
  appId: "1:89767656961:web:5556786d220cfeaad10a00",
  measurementId: "G-9226MES8SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export these to use in other files
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
