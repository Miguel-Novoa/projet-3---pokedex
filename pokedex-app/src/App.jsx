import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';;
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import PokemonSheet from './components/PokemonSheet';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/pages/Sheet/:pokemonId' element={<PokemonSheet />}/>
        </Routes>
      </BrowserRouter> 
     
    </div>
  )
}

export default App;
