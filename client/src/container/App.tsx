import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import AllShows from "../components/Shows/allShows";
import ShowDetail from "../components/ShowDetail/ShowDetail";
import Categories from "../components/Categories";
import Login from "../components/Login/Login";
import Register from "../components/Form/CreateFormFin";
import Contract from "../components/Contract";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<AllShows />} >
        </Route>
        <Route path='/shows/detail/:id' element={<ShowDetail />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}
