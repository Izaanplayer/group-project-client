<<<<<<< HEAD
import Example from '../components/Testing/Example';
import { Routes, Route, Link } from "react-router-dom";
=======
import Home from '../components/Home';
>>>>>>> dac34ebe9dc3157f57798d2c8c5d7e5c70c9e366
import './App.css';
import { ArtistDetail } from '../components/ArtistDetail/ArtistDetail';

function App() {

  return (
    <div>
<<<<<<< HEAD
      <Routes>
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path='/' element={<Example />} />
      </Routes>
=======
      <Home />
>>>>>>> dac34ebe9dc3157f57798d2c8c5d7e5c70c9e366
    </div>
  );
}

export default App;
