import React, { useEffect, useState } from "react";
import './styles/App.css'
import {Routes,Route} from "react-router-dom"
import Store from "./components/Store.jsx"
import Test from "/src/components/Test.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Store/>} />
      <Route path="/Test" element={<Test/>} />
    </Routes>
  );
}

export default App
