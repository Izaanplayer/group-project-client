import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Navbar() {
    return (
        <>
            <div className="w-full py-1 px-5 bg-white flex items-center fixed top-0 right-0 left-0 z-50 shadow lg:flex-row lg:flex-nowrap lg:justify-start">
                <div className="container py-3 mx-auto flex items-center justify-between lg:flex-nowrap xl:max-w-screen-xl">
                    <Link to="/">
                        <p className="text-2xl text-gray-900 font-extrabold inline-block py-1.5 mr-4 leading-none whitespace-nowrap tracking-widest">Artist App</p>
                    </Link>
                    <div className="flex basis-auto flex-grow items-center">
                        <ul className="flex flex-row items-center ml-auto pl-0 list-none my-0">
                            <SearchBar />
                            <li className="mr-8">
                                <p className="flex items-center text-gray-900 text-lg font-semibold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg> Explorar</p>
                            </li>
                            <li className="mr-8">
                                <p className="flex items-center text-gray-900 text-lg font-semibold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    Soy artista
                                </p>
                            </li>
                            <Link to="/artistDetail">
                                <li className="mr-8">
                                    <p className="flex items-center text-gray-900 text-lg font-semibold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Contratar
                                    </p>
                                </li>
                            </Link>
                            <li className="mr-8">
                                <p className="flex items-center text-gray-900 text-lg font-extrabold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 bg-gray-200 border-gray-700 hover:bg-opacity-70">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Ingresar
                                </p>
                            </li>
                            {/* Prueba redux */}
                            <Link to='/prueba'>
                            <li className="mr-8">
                                <p className="flex items-center text-gray-900 text-lg font-extrabold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 bg-gray-200 border-gray-700 hover:bg-opacity-70">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Prueba
                                </p>
                            </li>
                            </Link>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}