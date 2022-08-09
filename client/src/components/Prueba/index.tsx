import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { RootState } from "../../redux/store/store";
import { getAllArtists } from "../../redux/actions/Artists";
import { ArtistArgs } from "../../redux/reducer/artistSlice";

export default function Prueba() {
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
        <div className="h-56 grid grid-cols-3 gap-4 content-between">
            {artists && artists.map((ele, i) => {
                return (
                    <div key={i}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg container">
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
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                come back
            </button>
        </div>
    )
}