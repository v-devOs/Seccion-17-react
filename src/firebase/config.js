// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWoWat4yrIUgyh8sItVts8hIF75K1f02Q",
  authDomain: "react-curso-646a8.firebaseapp.com",
  projectId: "react-curso-646a8",
  storageBucket: "react-curso-646a8.appspot.com",
  messagingSenderId: "803303622660",
  appId: "1:803303622660:web:f285ddd851d283c33c4d51"
};

// Initialize Firebase
export const FireBaseApp = initializeApp( firebaseConfig );
export const FireBaseAuth = getAuth( FireBaseApp )
export const FirebaseDb = getFirestore( FireBaseApp )

