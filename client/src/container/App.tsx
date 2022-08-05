import { Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import Example from '../components/Testing/Example';
import ArtistDetail from '../components/ArtistDetail/ArtistDetail';

import './App.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path='/testing' element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
