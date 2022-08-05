import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getarts } from '../../Redux/actions/artistAction';

export default function Prueba() {
    const dispatch = useDispatch()
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
                        <p>{ele.name}</p>
                        <p>{ele.lastName}</p>
                        <p>{ele.city}</p>
                        <p>{ele.country}</p>
                        <p>{ele.description}</p>
                    </div>



                    </div>
                )
            })}
        </div>
    )
}
