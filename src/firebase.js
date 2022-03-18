// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-lG1D77FaRG6-ZMdcQR_nJ1aAw_400E",
  authDomain: "shopee-food-21068.firebaseapp.com",
  projectId: "shopee-food-21068",
  storageBucket: "shopee-food-21068.appspot.com",
  messagingSenderId: "155586822140",
  appId: "1:155586822140:web:97413c04b46adb4e043c79",
  measurementId: "G-HHFCMY9E8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();