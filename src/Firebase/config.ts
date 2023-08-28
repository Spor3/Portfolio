// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOxS6VAWdJim0jXMo7TGwr_ETsQMbcMTE",
  authDomain: "myporfolio-1ae5c.firebaseapp.com",
  projectId: "myporfolio-1ae5c",
  storageBucket: "myporfolio-1ae5c.appspot.com",
  messagingSenderId: "974651109224",
  appId: "1:974651109224:web:4bffc365c988ab0fbbb0dd",
  measurementId: "G-4HXE4VY8D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
const analytics = getAnalytics(app);