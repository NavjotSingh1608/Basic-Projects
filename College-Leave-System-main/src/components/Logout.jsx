import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'react-dom'
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate=useNavigate();
  return (
   <>
   <div style={{display:"flex" ,gap:".5rem", cursor:"pointer",alignItems:"center",justifyContent:"center"}} onClick={()=>{
      
      navigate('/')}} >
   <LogoutIcon fontSize="large" color='error' >

      </LogoutIcon> 
      <p style={{fontSize:"17px"}}>Logout</p>
   </div>
    
   </>
   
  
    
  )
}

export default Logout