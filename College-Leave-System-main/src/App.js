import React, { useState } from "react";
import Login from '../src/pages/Login';
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom';
import Homepage from "../src/pages/Homepage";
import '../src/pages/CSS/App.css';
import Stu from "../src/pages/student";
import { Button } from "@mui/material";
import {auth} from './firebase-config';
import {signOut} from 'firebase/auth';
import Authority from "../src/pages/Authority";
import Hod from '../src/pages/Hod';
import ClassAuth from "../src/pages/ClassAuth";
import Hodlogin from "../src/pages/Hodlogin";
import Gate from "../src/pages/Gate";
import Navbar from "./components/Navbar"
import SignIn from "../src/pages/Loginn";
const App=()=>{
    const [curruser,setcurruser]=useState("");
    const [isAuth,setIsAuth]=useState(false);
    const logout = async () => {
        await signOut(auth);
        setIsAuth(false);
        window.location.pathname="/";
      };
    return (
        <BrowserRouter>
     
        <Routes>
            <Route path="/"  element={<Homepage/>}/>
        <Route path="/login" element={<SignIn setIsAuth={setIsAuth} setcurruser={setcurruser}/>}/> 
        {/* <Route path="/stu" element={<Stu email={curruser}/>}/>
        <Route path="/auth" element={<Authority />}/> 
        <Route path="/hod" element={<Hod />}/> 
        <Route path="/classauth" element={<ClassAuth />}/> */}
            {(isAuth)  ? <Route path="/stu" element={<Stu email={curruser}/>}/> :<Route path="/stu" element={<SignIn setIsAuth={setIsAuth} setcurruser={setcurruser}/>}/>}
            {console.log(curruser)}
            {(isAuth)  ? <Route path="/auth" element={<Authority />}/> :<Route path="/auth" element={<SignIn setIsAuth={setIsAuth} setcurruser={setcurruser}/>}/>}
            {(isAuth)  ? <Route path="/hod" element={<Hod />}/> :<Route path="/hod" element={<SignIn setIsAuth={setIsAuth} setcurruser={setcurruser}/>}/>}
            {(isAuth)  ? <Route path="/classauth" element={<ClassAuth />}/> :<Route path="/classauth" element={<SignIn setIsAuth={setIsAuth} setcurruser={setcurruser}/>}/>}
            {console.log(isAuth)}
        </Routes>   
        </BrowserRouter>
    );
}
export default App;