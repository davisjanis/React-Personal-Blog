/// INITIALIZE FIREBASE APP

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-personal-blog-85518.firebaseapp.com",
  projectId: "react-personal-blog-85518",
  storageBucket: "react-personal-blog-85518.appspot.com",
  messagingSenderId: "761274939146",
  appId: "1:761274939146:web:975e29e9903602593d2cf3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);