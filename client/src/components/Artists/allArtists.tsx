import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { RootState } from "../../redux/store/store";
import { getAllArtists } from "../../redux/actions/Artists";
import { ArtistArgs } from "../../redux/reducer/artistSlice";

import { CardArtists } from "./cardArtists";
import Navbar from "../Navbar";

export default function AllArtists() {
    const dispatch = useAppDispatch();
    const artistState = useAppSelector((state: RootState) => state.artists);
    const [artists, setArtists] = useState<ArtistArgs[]>([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("name") !== null) {
            //Get Artists By Name
            console.log('getArtistByName');
        } else {
            dispatch(getAllArtists());
        }
    }, [dispatch, searchParams]);

    useEffect(() => {
        if (artistState.data.length > 0) {
            setArtists(artistState.data);
        }
    }, [artistState]);


    return (
        <>
            <Navbar />
            <div className="container">
                <CardArtists artists={artists} />
            </div>
        </>
    )
}