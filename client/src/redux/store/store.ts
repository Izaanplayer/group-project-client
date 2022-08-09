import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import artistSlice from '../reducer/artistSlice';

export const store = configureStore({
  reducer: {
    artists: artistSlice
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
