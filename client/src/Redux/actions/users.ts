import axios from 'axios';
import { AppThunk } from "../store/store";

export const LogoutUser = (): AppThunk => async (dispatch) => {
    try {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('role');
    } catch (error) {
        console.log(error);
    }
}

export const ValidateToken = () => async () => {
    try {
        const { data } = await axios.get('http://localhost:4000/users/validateToken', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('auth-token')}`
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}