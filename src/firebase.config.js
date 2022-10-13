
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vOYxlrD6eEZJW939Y2wA5h_SQZomRWM",
  authDomain: "house-marketplace-app-9d1e7.firebaseapp.com",
  projectId: "house-marketplace-app-9d1e7",
  storageBucket: "house-marketplace-app-9d1e7.appspot.com",
  messagingSenderId: "659758104650",
  appId: "1:659758104650:web:44fc4caa885bde7ca6e6b3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()