import { useEffect, useState } from "react";
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

    useEffect(() => {
        dispatch(getAllArtists());
    }, [dispatch]);

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