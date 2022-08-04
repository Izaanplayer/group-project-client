import Example from '../components/Testing/Example';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import './App.css';
import { ArtistDetail } from '../components/ArtistDetail/ArtistDetail';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path='/' element={<Example />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
