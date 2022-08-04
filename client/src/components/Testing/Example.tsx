import auriculares from '../../media/auriculares.png';
import wave8 from '../../media/wave8.svg';
import Navbar from '../Navbar';

/* #F2F2F2 Background color */

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col bg-primary-200">

        <div className="flex flex-row h-full items-center w-full z-40">
          <div className="w-1/2 flex flex-row items-center justify-center">
            <img src={auriculares} className="w-2/3 animate-[floating_3s_ease-in-out_infinite]" alt="" />
          </div>
          <div className="w-1/2 px-7">
            <h1 className="text-end text-gray-500 font-extrabold text-6xl mb-6">Este es el mensaje principal de la página</h1>
            <p className="my-4 text-lg text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt, quia et qui aut quo eaque molestias itaque placeat! Nihil molestiae eligendi nemo tenetur quia ratione aut maiores aspernatur recusandae.</p>
            <button className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-lg float-right duration-75 hover:bg-opacity-90">Saber más</button>
          </div>
        </div>

        <div className="absolute w-full h-full flex items-end">
          <img src={wave8} className="w-full" alt="" />
        </div>
      </div>
    </>
  )
}