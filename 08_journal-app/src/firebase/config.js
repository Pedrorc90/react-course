// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUn6Yhwzhp4WFNSEyWi6Zm-SE6GCXZuA",
  authDomain: "react-course-56913.firebaseapp.com",
  projectId: "react-course-56913",
  storageBucket: "react-course-56913.appspot.com",
  messagingSenderId: "438070715254",
  appId: "1:438070715254:web:d61c99f5b69f5784029057"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
