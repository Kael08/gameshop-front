import React, { useEffect, useState } from "react";
import './styles/App.css'
import Cards from './components/Cards.jsx'

function App() {
  return (
    <div className="app">
      <h1>Список игр</h1>
      <Cards games/>
    </div>
  );
}

export default App
