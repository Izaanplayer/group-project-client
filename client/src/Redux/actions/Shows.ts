import { AppThunk } from "../store/store";
import { getByName, getDetail } from "../reducer/showSlice";
import axios from 'axios';

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const getShowByName = (name: string): AppThunk => async (dispatch) => {
    const { data } = await axios.get(`http://localhost:4000/shows?name=${name}`);
    console.log(data);
    dispatch(getByName(data));
}

export const getShowDetail = (id: string): AppThunk => async (dispatch) => {
    const { data } = await axios.get(`http://localhost:4000/shows/${id}`);
    dispatch(getDetail(data));
}