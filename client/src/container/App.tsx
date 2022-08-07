import { Route, Routes } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Explore from "../components/Explorar";
import Home from "../components/Home";
import Prueba from "../components/Prueba";
import Example from "../components/Testing/Example";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/artistDetail' element={<ArtistDetail />} />
        <Route path='/testing' element={<Example />} />
        <Route path='/prueba' element={<Prueba />} />
      </Routes>
    </>
  )
}
