import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './js/store';

import Sheet from './pages/Sheet';
import Home from './Home';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='/pages/Sheet/:pokemonId' element={<Sheet />}/>
          </Routes>
        </BrowserRouter> 
      
      </div>
    </Provider>
    
  )
}

export default App;
