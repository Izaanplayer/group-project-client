import { AppThunk } from "../store/store";
import { getAll, getDetail, IsAdmin } from "../reducer/artistSlice";
import axios from 'axios';

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const getAllArtists = (): AppThunk => async (dispatch) => {
    const { data } = await axios.get("http://localhost:4000/artist");
    dispatch(getAll(data));
}

export const getArtistDetail = (id: string): AppThunk => async (dispatch) => {
    const { data } = await axios.get(`http://localhost:4000/artist/${id}`);
    dispatch(getDetail(data));
}

export const getIsAdmin = (id: string): AppThunk => async (dispatch) => {
    const { data } = await axios.get('http://localhost:4000/soloadmin',{
        headers:{
            Authorization:`Bearer ${window.localStorage.getItem('auth-token')}`
        }
    });
    dispatch(IsAdmin(data));
}