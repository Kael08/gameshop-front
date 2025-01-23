import React, { useEffect, useState } from "react";
import '/src/styles/App.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'
import Cards from '/src/components/Cards.jsx'

function Store() {
  return (
    <div className="page-container">
      <Header/>
      <main className="app">
        <Cards/>
      </main>
      <Footer/>
    </div>
  );
}

export default Store
