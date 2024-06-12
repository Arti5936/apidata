// Signup.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
 import { useNavigate } from 'react-router-dom';
 import "./hello.css";

function Signup() {
  const[name,setName] = useState();
 const[email,setEmail]= useState();
 const[password,setPassword]= useState();
 const navigate = useNavigate();
 const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:8000/register',{
   name,email,password
  }).then(result =>{ console.log(result) 
    navigate('/login')})
 
  .catch(err=>{
   console.log(err);
  
  })
}
  return (
    <div className='btn'>
     <div className='btn1'> <form onSubmit={handleSubmit} required>
        Name: <input type="text" name="text"  onChange={(e)=>{
          setName(e.target.value)
        }}/><br />
        Email: <input type="email" name="text" onChange={(e)=>{
          setEmail(e.target.value);
        }} required/><br />
        Password: <input type="password" name="password" onChange={(e)=>{
          setPassword(e.target.value);
        }} required/><br />
        <button type="submit">Register</button>

        
      </form>
      <NavLink to="/login">Submit</NavLink>
      </div>
    </div>
  );
}

export default Signup;
