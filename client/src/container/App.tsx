import Example from '../components/Testing/Example';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import SearchBar from '../components/SearchBar/SearchBar';
import './App.css';
import { ArtistDetail } from '../components/ArtistDetail/ArtistDetail';

function App() {

  return (
    <div>
<<<<<<< HEAD
      {/* <Home /> */}
      <SearchBar/>
=======

      <Routes>
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path='/' element={<Home />} />
      </Routes>
>>>>>>> 1090ae39a1bf93ce0166b4f31d01bf72633baae4
    </div>
  );
}

export default App;
