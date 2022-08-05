import Example from '../components/Testing/Example';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import './App.css';
import ArtistDetail from '../components/ArtistDetail/ArtistDetail';

import StateHooksComponent from '../components/Pruebas/Pruebas'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path="/Pruebas" element={<StateHooksComponent />} />

        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
