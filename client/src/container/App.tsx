import { Route, Routes } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Explore from "../components/Explorar";
import Home from "../components/Home";
import Example from "../components/Testing/Example";
import AllArtists from "../components/Artists/allArtists";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<AllArtists />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/artistDetail/:id' element={<ArtistDetail />} />
        <Route path='/testing' element={<Example />} />
      </Routes>
    </>
  )
}
