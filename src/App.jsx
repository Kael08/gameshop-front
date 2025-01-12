import React, { useEffect, useState } from "react";
import './styles/App.css'
import Cards from './components/Cards.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Header/>
      <div className="app">
        <h1>Список игр</h1>
        <Cards games/>
      </div>
      <Footer/>
    </div>
  );
}

export default App
