import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artistSlice from '../reducer/artistSlice';
import authSlice from '../reducer/authSlice';

export const store = configureStore({
  reducer: {
    artists: artistSlice,
    auth: authSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
