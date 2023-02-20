// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD7h6EUHwLnEL3dZcRvaDB2eYIgB4y4NFw",
  authDomain: "linkedin-clone-bc0d6.firebaseapp.com",
  projectId: "linkedin-clone-bc0d6",
  storageBucket: "linkedin-clone-bc0d6.appspot.com",
  messagingSenderId: "797939191431",
  appId: "1:797939191431:web:b15d87733f164752323222",
  measurementId: "G-23TLP9PXGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};

