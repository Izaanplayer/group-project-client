import { createSlice } from '@reduxjs/toolkit';
//import { RootState } from '../store/store';

export interface AuthState {
    isActive: boolean;
}

const initialState: AuthState = {
    isActive: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        isActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const { isActive } = authSlice.actions;

export default authSlice.reducer;
