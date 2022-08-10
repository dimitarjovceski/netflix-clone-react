import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0cCsg3TV6V3uBQ7k-leiWwcppUh75Y4s",
  authDomain: "netflix-clone-react-4f2d1.firebaseapp.com",
  projectId: "netflix-clone-react-4f2d1",
  storageBucket: "netflix-clone-react-4f2d1.appspot.com",
  messagingSenderId: "1003367241383",
  appId: "1:1003367241383:web:6d7266004c927bbdd3ad82",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
