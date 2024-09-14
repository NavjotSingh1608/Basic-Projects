import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDMnwpUSYIIkVAIW4KS4gjpYwKIjdgzhIs",
  authDomain: "college-leave-system.firebaseapp.com",
  projectId: "college-leave-system",
  storageBucket: "college-leave-system.appspot.com",
  messagingSenderId: "437467906694",
  appId: "1:437467906694:web:4908db8f26784eff288707",
  measurementId: "G-CW4Y1BR5X6"
};
  const fire=()=>{
    
  }
  export default fire;
  const app=initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth=getAuth(app);
  export const storage=getStorage(app);