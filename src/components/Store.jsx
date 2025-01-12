import React, { useEffect, useState } from "react";
import '/src/styles/App.css'
import Cards from '/src/components/Cards.jsx'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'

function Store() {
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

export default Store
