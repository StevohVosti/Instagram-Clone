import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Screens/Login";
import Register from "./components/Screens/Register";
import Profile from "./components/Screens/Profile";
import Home from "./components/Screens/Home";


function App() {
  return (
   <BrowserRouter>
   {/* <Header /> */}
   
   <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/register" exact element={<Register />} />
    <Route path="/profile" exact element={<Profile />} />

   </Routes>

   </BrowserRouter>
    
  );
}

export default App;

