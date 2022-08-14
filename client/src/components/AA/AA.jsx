import React, { useEffect } from 'react'
import { getIsAdmin } from '../../redux/actions/Artists'
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks'

export default function AA() {
    const dispatch = useAppDispatch()
    const admin = useAppSelector(state  => state.artists)

    useEffect(() =>{
        dispatch(getIsAdmin())
    },[])

    console.log(admin);

  return (
    <div>
        <h1>hola backend</h1>
        {/* <h1>{admin}</h1> */}
    </div>
  )
}
