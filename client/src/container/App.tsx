import { Route, Routes } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Home from "../components/Home";
import Prueba from "../components/Prueba";
import Example from "../components/Testing/Example";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/artistDetail" element={<ArtistDetail />} />
        <Route path='/testing' element={<Example />} />

        <Route path='/prueba' element={<Prueba />} />

      </Routes>
    </>
  )
}

export default App;
