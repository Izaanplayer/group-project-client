import axios from 'axios';
import {getArtists, getArtistsId} from '../reducer/artistSlice';


export const getarts = () => (dispatch) => {
    axios.get('http://localhost:4000/artist')
            .then(res => dispatch(getArtists(res.data)))
            .catch(e => console.log(e))
}

export const getartsId = (id) => (dispatch) => {
    axios.get(`http://localhost:4000/artist${id}`)
            .then(res => dispatch(getArtistsId(res.data)))
            .catch(e => console.log(e))
}