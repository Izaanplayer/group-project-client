export default function Navbar() {
    return (
        <>
            <div className="w-full py-1 px-5 bg-white flex items-center fixed top-0 right-0 left-0 z-50 shadow lg:flex-row lg:flex-nowrap lg:justify-start">
                <div className="container py-3 mx-auto flex items-center justify-between lg:flex-nowrap xl:max-w-screen-xl">
                    <a href='#' className="text-2xl text-gray-900 font-extrabold inline-block py-1.5 mr-4 leading-none whitespace-nowrap tracking-widest">Artist App</a>
                    <div className="flex basis-auto flex-grow items-center">
                        <ul className="flex flex-row items-center ml-auto pl-0 list-none my-0">
                            <li className="mr-8">
                                <a href='#' className="text-gray-900 text-lg font-semibold py-1.5 px-4 block rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">Explorar</a>
                            </li>
                            <li className="mr-8">
                                <a href='#' className="text-gray-900 text-lg font-semibold py-1.5 px-4 block rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">Soy artista</a>
                            </li>
                            <li className="mr-8">
                                <a href='#' className="text-gray-900 text-lg font-semibold py-1.5 px-4 block rounded-3xl transition-all duration-75 ease-linear delay-75 hover:bg-gray-400 hover:bg-opacity-20">Contratar</a>
                            </li>
                            <li className="mr-8">
                                <a href='#' className="text-gray-900 text-lg font-extrabold py-1.5 px-4 block rounded-3xl transition-all duration-75 ease-linear delay-75 bg-gray-200 border-gray-700 hover:bg-opacity-70">Ingresar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}