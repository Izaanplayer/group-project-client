import Navbar from "../Navbar"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <section className="h-screen">
            <Navbar />
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample" />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>
                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <label>Correo electrónico</label>
                                <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Ingresa tu correo electrónico" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <label>Contraseña</label>
                                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Ingresa tu contraseña" />
                            </div>

                            {/* <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                                    <label className="form-check-label inline-block text-gray-800">Recuerdame</label>
                                </div>
                                <Link to="#!" className="text-red-600">¿Olvidaste tu contraseña?</Link>
                            </div> */}

                            <div className="text-center lg:text-left">
                                <button type="button" className="w-full inline-block px-10 py-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-700 active:scale-95 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 transition-colors duration-200">Ingresar</button>
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">¿No tienes una cuenta?</p>
                                <Link to='/register' className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Registrate</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}