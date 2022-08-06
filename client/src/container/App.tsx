import { Route, Routes } from 'react-router';

import Home from '../components/Home';
import Example from '../components/Testing/Example';
import ArtistDetail from '../components/ArtistDetail/ArtistDetail';
import Prueba from "../components/Prueba/Prueba.jsx";

import './App.css';

export default function App() {
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
