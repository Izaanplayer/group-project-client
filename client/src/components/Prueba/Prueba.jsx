import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getarts } from '../../Redux/actions/artistAction';

export default function Prueba() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const {artists} = useSelector(state => state.artists)

    useEffect(() => {
        dispatch(getarts())
    }, [dispatch])


    return (
        <div className="h-56 grid grid-cols-3 gap-4 content-between ...">
            {artists && artists.map((ele,i )=>{
                return(
                    <div  key= {i}>
                    <div  className="max-w-sm rounded overflow-hidden shadow-lg container">

                        <h2>{ele.nickName}</h2>
                        <h2>{ele.name}</h2>
                        <p>{ele.lastName}</p>
                        <p>{ele.city}</p>
                        <p>{ele.country}</p>
                        <p>{ele.description}</p>
                    </div>

                    


                    </div>
                )
            })}
            <button onClick={() =>{history('/')}} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        come back
            </button>
        </div>
    )
}


//// @ts-ignore 