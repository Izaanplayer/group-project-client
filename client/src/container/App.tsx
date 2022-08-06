import { Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import Example from '../components/Testing/Example';
import ArtistDetail from '../components/ArtistDetail/ArtistDetail';
import Prueba from '../components/Prueba/Prueba';

import './App.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path='/testing' element={<Example />} />

        <Route path='/prueba' element={<Prueba />} />

      </Routes>
    </div>
  );
}

export default App;
