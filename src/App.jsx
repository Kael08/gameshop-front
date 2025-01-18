import React, { useEffect, useState } from "react";
import './styles/App.css'
import {Routes,Route} from "react-router-dom"
import Store from "./components/Store.jsx"
import GamePage from "./components/gamePage.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Store/>} />
      <Route path="/gamePage" element={<GamePage/>} />
    </Routes>
  );
}

export default App
