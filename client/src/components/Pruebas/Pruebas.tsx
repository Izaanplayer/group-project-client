import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { allArtists } from '../../Redux/actions/artistActions'
interface Props {
    
}


const StateHooksComponent: React.FC<Props> = ({}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        console.log('HOLA DESDE PRUEBA!')
        // dispatch(allArtists())
    },[dispatch])

    return (
        <div className="h-56 grid  gap-4 content-start ..." >
            State Hooks component <h1>Pruebas!!</h1>
            <button  onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >back Home</button>

            
        </div>
    )
}

export default StateHooksComponent;