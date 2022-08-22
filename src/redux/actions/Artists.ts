import { AppThunk } from "../store/store";
import { getAll, getByName, getDetail, isLoading } from "../reducer/artistSlice";
import { RUTA_APP } from "../..";
import axios from 'axios';

export const getAllArtists = (): AppThunk => async (dispatch) => {
    console.log(RUTA_APP);
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}artist`);
    dispatch(getAll(data));
    dispatch(isLoading(false));
}

export const getArtistByName = (name: string): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get(`${RUTA_APP}artist?name=${name}`);
        dispatch(getByName(data));
    } catch (error: any) {
        alert(error.response.data.message);
    }
}

export const getArtistDetail = (id: string): AppThunk => async (dispatch) => {
    dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}artist/${id}`);
    dispatch(getDetail([data]));
    dispatch(isLoading(false));
}