 import React from "react";
 import {  Route, Routes } from 'react-router-dom';
 import Signup from './Signup';
 import Login from './Login';
 function Tullu(){
        return(<div>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        </div>)
 };
 export default Tullu;