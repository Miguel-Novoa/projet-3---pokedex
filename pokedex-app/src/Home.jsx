import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Listing from './components/Listing'

function Home() {

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

export default Home;