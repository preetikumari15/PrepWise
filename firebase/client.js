// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnjixUSGOZjes_QCC8ly_NemgpbJoLF2s",
  authDomain: "prepwise-41cd2.firebaseapp.com",
  projectId: "prepwise-41cd2",
  storageBucket: "prepwise-41cd2.firebasestorage.app",
  messagingSenderId: "616199637432",
  appId: "1:616199637432:web:e091c2d30baf58a496274d",
  measurementId: "G-H15DW35Y29"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);