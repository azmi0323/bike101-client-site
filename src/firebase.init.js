// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH998vqTGi_S94X3KzIPbZPsNK0G3IGa0",
  authDomain: "project-nightmore.firebaseapp.com",
  projectId: "project-nightmore",
  storageBucket: "project-nightmore.appspot.com",
  messagingSenderId: "666680119899",
  appId: "1:666680119899:web:26de58d920234fa852657e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;