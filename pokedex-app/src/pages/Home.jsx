import React from "react";
import ReactDOM from "react-dom";
import '../App.css';

import Navbar from '../components/Navbar'
import Listing from '../components/Listing'

function Home() {

  return (
    <div className="App">
        <Navbar/>   
        <Listing/>
    </div>
 
  )
}

export default Home;