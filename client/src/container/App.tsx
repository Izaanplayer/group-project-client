import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import AllArtists from "../components/Artists/allArtists";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Categories from "../components/Categories";
import Login from "../components/Login/Login";
import Register from "../components/Form/CreateFormFin";
import Contract from "../components/Contract";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<AllArtists />} >
        </Route>
        <Route path='/artists/detail/:id' element={<ArtistDetail />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}
