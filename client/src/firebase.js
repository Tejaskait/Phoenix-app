// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "phoenix-app-86a4f.firebaseapp.com",
  projectId: "phoenix-app-86a4f",
  storageBucket: "phoenix-app-86a4f.firebasestorage.app",
  messagingSenderId: "1002225235702",
  appId: "1:1002225235702:web:46407c5af2c1f3622f5ed7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);