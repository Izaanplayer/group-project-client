import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'

import Navbar from '../Navbar'

export default function ArtistDetail() {
    // const {id} = useParams();
    // const dispatch = useDispatch();


    return (
        <div className="flex bg-slate-800 my-auto mx-auto">
            {/* <Navbar/> */}
            <h1 className="bg-red-500">
                ArtistDetail
            </h1>
        </div>
    )
}
