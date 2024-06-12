// Signup.js
import React, { useState } from 'react';
//import { NavLink } from 'react-router-dom';
import "./Home.jsx";
import axios from "axios";
 import { useNavigate } from 'react-router-dom';
 import "./app.css";
function Login() {
  const[name,setName] = useState();
 const[email,setEmail]= useState();
 const[password,setPassword]= useState();
 const navigate = useNavigate();
 const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:8000/login',{
   email,password
  }).then(result =>{ console.log(result)
    if(result.data==="success"){
      navigate('/Home');
    }
    
    })
 
  .catch(err=>{
   console.log(err);
  
  })
}
  return (
    <div className='btn'>
     <div className='btn1'> <form onSubmit={handleSubmit}>
        Name: <input type="text" name="text"  onChange={(e)=>{
          setName(e.target.value)
        }}/><br />
        Email: <input type="email" name="text" onChange={(e)=>{
          setEmail(e.target.value);
        }}/><br />
        Password: <input type="password" name="password" onChange={(e)=>{
          setPassword(e.target.value);
        }} /><br />
        <button type="submit">Register</button>

        
      </form>
      
      </div>
    </div>
  );
}

export default Login;