import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { RootState } from "../../redux/store/store";
import { getAllArtists, getArtistByName } from "../../redux/actions/Artists";
import { ArtistArgs } from "../../redux/reducer/artistSlice";

import { CardArtists } from "./cardArtists";
import Navbar from "../Navbar";

export default function AllArtists() {
    const dispatch = useAppDispatch();
    const artistState = useAppSelector((state: RootState) => state.artists.artists);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("name") !== null) {
            //Get Artists By Name
            dispatch(getArtistByName(searchParams.get("name")?.toLowerCase()!));
        } else {
            dispatch(getAllArtists());
        }
    }, [dispatch, searchParams]);


    return (
        <>
            <Navbar />
            <div className="container">
                <CardArtists artists={artistState} />
            </div>
        </>
    )
}