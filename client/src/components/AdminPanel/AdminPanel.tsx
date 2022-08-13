import React from 'react'
import adminImage from '../../media/Admin.png'
import { Events } from '../AdminComponents/Events'
import ModalAdminOptions from '../ModalAdminOptions/ModalAdminOptions'
import Navbar from '../Navbar'

export default function AdminPanel() {
  return (
    <>
      <Navbar />
      <div className="container bg-mikeBlack mx-0 pl-0 pr-2">
        <div className="flex justify-between">
          {/* <button className="bg-mikeWhite h-11 w-11 rounded-l-none rounded-br-xl shadow-inner group border border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto my-2 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            <div className="hidden group-focus:block top-full w-screen bg-white shadow-md mt-4 ml-3 rounded sm:max-w-fit">
            <ul className="text-left mx-2 border rounded">
            <li className="pr-4 py-1 hover:bg-gray-100 border-b">funcionalidad1</li>
            <li className="pr-4 py-1 hover:bg-gray-100 border-b">funcionalidad2</li>
            <li className="pr-4 py-1 hover:bg-gray-100 border-b">funcionalidad3</li>
            <li className="pr-4 py-1 hover:bg-gray-100 border-b">funcionalidad4</li>
            <li className="pr-4 py-1 hover:bg-gray-100">funcionalidad5</li>
            </ul>
            </div>
          </button> */}
          <div className="h-3 w-auto relative">
            <h1 className="text-mikeWhite text-4xl ml-6 absolute top-1/2 w-96">Gestión de la Aplicación</h1>
          </div>

          {/* <img className="h-11 cursor-pointer" src={adminImage} alt="admin profile picture" /> */}
          <ModalAdminOptions />
        </div>
      </div>
      <div className="bg-slate-700 min max-h-screen">
        <div className="h-screen ">
          <div className="w-96 ml-6 pt-6">
            <Events />
          </div>
        </div>
      </div>
    </>
  )
}
