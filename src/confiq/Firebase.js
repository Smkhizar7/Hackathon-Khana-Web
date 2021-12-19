import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,updatePassword,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    getDoc,
    getDocs,
    deleteDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSuGx3hmlC378P-BeXDScCT1oDmkOfKmI",
    authDomain: "portfolio-9e9d7.firebaseapp.com",
    databaseURL: "https://portfolio-9e9d7-default-rtdb.firebaseio.com",
    projectId: "portfolio-9e9d7",
    storageBucket: "portfolio-9e9d7.appspot.com",
    messagingSenderId: "728130567389",
    appId: "1:728130567389:web:b102276cb2643d7fc96f34",
    measurementId: "G-M24FDKWKZR",
  };
initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    collection,
    doc,
    setDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    getDoc,
    deleteDoc,updatePassword,getDocs
};