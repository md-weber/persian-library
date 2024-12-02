import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaDdwjnRGUG4_YmPY7rRhZFw4Y-5Mmq68",
  authDomain: "persian-library.firebaseapp.com",
  projectId: "persian-library",
  storageBucket: "persian-library.firebasestorage.app",
  messagingSenderId: "374242993168",
  appId: "1:374242993168:web:1a71b65d1b43e6406bd695",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
