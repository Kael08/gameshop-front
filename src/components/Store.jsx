import React, { useEffect, useState } from "react";
import '/src/styles/App.css'
import Cards from '/src/components/Cards.jsx'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'

function Store() {
  return (
    <div className="page-container">
      <Header/>
      <div className="app">
        <Cards games/>
      </div>
      <Footer/>
    </div>
  );
}

export default Store
