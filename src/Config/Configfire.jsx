import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBE9ImyLyeuyn8aMN1OGHZ_GIkrdMUypiA",
    authDomain: "react-sigform.firebaseapp.com",
    projectId: "react-sigform",
    storageBucket: "react-sigform.appspot.com",
    messagingSenderId: "954464573514",
    appId: "1:954464573514:web:8b18413ed4af1b9a2aaeb3",
    measurementId: "G-Z1F4YG238P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

}