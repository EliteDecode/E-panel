import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-7PQfarxAZg9dIoUS5XuOLMYXh19Yhpo",
  authDomain: "cpanel-c6b08.firebaseapp.com",
  projectId: "cpanel-c6b08",
  storageBucket: "cpanel-c6b08.appspot.com",
  messagingSenderId: "639648859924",
  appId: "1:639648859924:web:939b1676ac86a1dc9b2401",
  measurementId: "G-ZJVDDDS8VL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
