import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store/store';
import { getArtistDetail } from '../../redux/actions/Artists';
import { ArtistArgs } from '../../redux/reducer/artistSlice';

import Navbar from '../Navbar';

export default function ArtistDetail() {
    const dispatch = useAppDispatch();
    const artistState = useAppSelector((state: RootState) => state.artists);
    const { id } = useParams();
    const [artistDetail, setArtistDetail] = useState<ArtistArgs[]>([]);

    useEffect(() => {
        if (artistState.detail.length > 0) {
            setArtistDetail(artistState.detail);
        }
    }, [artistState]);

    useEffect(() => {
        dispatch(getArtistDetail(String(id)));
    }, [dispatch]);

    return (
        <div className="flex justify-center text-center my-20 h-auto">
            <Navbar />
            {
                (artistDetail.length > 0) ? <ul className="bg-mikeBlack max-h-fit  w-3/4 mt-5 rounded-t-3xl rounded-b-2xl text-mikeWhite">
                    <div className=" rounded-t-sm shadow-md shadow-mikeWhite">
                        <h2 className="text-2xl font-bold capitalize mt-4 pt-5 px-4 ">
                            {'Artista ' + artistDetail[0].nickName}
                        </h2>
                        <h3 className="text-xl font-semibold capitalize mt-5 mb-5 pb-2 px-4">
                            canciones de rap
                            {artistDetail[0].eventName}
                        </h3>
                    </div>
                    <div className="">
                        <img className="mx-auto max-h-80 px-8" src={artistDetail[0].imagesEvent[0]} alt='sasdfasdfasasdfasdfa' />
                        <p className="text-justify mx-auto mt-4 mb-4 max-w-5xl px-11 ">
                            {artistDetail[0].description}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-xl mb-3 items-center mx-auto">
                            {artistDetail[0].duration + ' $' + artistDetail[0].priceTime}
                        </p>
                        <button className="flex mx-auto my-3 items-center text-mikeBlack text-lg font-bold py-1.5 px-4 rounded-3xl transition-all duration-75 ease-linear delay-75 bg-mikeWhite hover:bg-opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            Contratar
                        </button>
                    </div>
                    <h4 className="capitalize mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {artistDetail[0].city + ', ' + artistDetail[0].country}
                    </h4>
                </ul> : ''
            }
        </div>
    )
}