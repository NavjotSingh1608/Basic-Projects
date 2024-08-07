// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0aRoPUrEBfX271LA3iPO2CfNFbR0PEss",
  authDomain: "passmanager-69a44.firebaseapp.com",
  projectId: "passmanager-69a44",
  storageBucket: "passmanager-69a44.appspot.com",
  messagingSenderId: "1090541496803",
  appId: "1:1090541496803:web:00816de575e54a0b2e58d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}