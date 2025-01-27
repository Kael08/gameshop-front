import React, { useEffect, useState } from "react";
import './styles/App.css'
import {Routes,Route} from "react-router-dom"
import Store from "./components/Store.jsx"
import GamePage from "./components/GamePage.jsx";
import Profile from "./components/Profile.jsx"
import Auth from "./components/Auth.jsx"
import SignUp from "./components/SignUp.jsx"
import Cart from "./components/Cart.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Store/>} />
      <Route path="/gamePage/:id" element={<GamePage/>} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
}

export default App
