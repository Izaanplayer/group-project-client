import axios from 'axios';
import { isLogout } from '../reducer/loggedSlice';
import { AppThunk } from "../store/store";
import { getAll } from '../reducer/usersSlice'
import { RUTA_APP } from '../..';

export const LogoutUser = (): AppThunk => async (dispatch) => {
    try {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('role');
    } catch (error) {
        console.log(error);
    }
}

export const ValidateToken = (): AppThunk => async (dispatch) => {
    try {
        const { data } = await axios.get(`${RUTA_APP}validateToken`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth-token')}`
            }
        });
        if (data.authorized === false) {
            dispatch(isLogout());
        }
    } catch (error) {

    }
}

export const getAllUsers = (): AppThunk => async (dispatch) => {
    // dispatch(isLoading(true));
    const { data } = await axios.get(`${RUTA_APP}users`);
    dispatch(getAll(data));
    // dispatch(isLoading(false));
}