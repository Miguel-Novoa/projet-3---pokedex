import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Navbar from './components/Navbar'
import Listing from './components/Listing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/> 
     <Listing/>
    </div>
  )
}

export default App;
