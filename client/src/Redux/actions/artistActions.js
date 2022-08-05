import axios from "axios";
import { getArtists, getArtistsId } from "../reducer/artistSlice";


export const allArtists = () => (dispatch) => {
    axios.get('http://localhost:4000/artist')
        .then(r => {
            dispatch(getArtists(r.data))
        })
        .catch( e => console.log(e))
} 