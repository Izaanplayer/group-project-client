import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import AllShows from "../components/Shows/allShows";
import ShowDetail from "../components/ShowDetail/ShowDetail";
import Categories from "../components/Categories";
import Login from "../components/Login/Login";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import Register from "../components/Form/CreateFormFin";
import Contract from "../components/Contract";
// import axios from "axios";


export default function App() {

// axios.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   // return response;
//   console.log(response) ;
//   return response
// }) 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<AllShows />} />
        <Route path='/shows/detail/:id' element={<ShowDetail />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/contract' element={<Contract />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/AdminPanel' element={<AdminPanel />} />
      </Routes>
    </>
  )
}
