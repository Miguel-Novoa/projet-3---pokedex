import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

import Navbar from './components/Navbar'
import Listing from './components/Listing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/> 
     <div className='list'>
        <div className="wrap">
          <div className="search">
              <input type="text" className="searchTerm" placeholder="Chercher un pokemon"/>
              <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
              </button>
          </div>
        </div>
        <Listing/>
      </div>
    </div>
  )
}

export default App;
