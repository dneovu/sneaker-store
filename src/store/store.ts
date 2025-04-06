import { configureStore } from '@reduxjs/toolkit';
import sneakerReducer from '../store/sneakersSlice';

export const store = configureStore({
  reducer: {
    sneakers: sneakerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
