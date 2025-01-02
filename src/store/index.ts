import { configureStore } from '@reduxjs/toolkit';
import researchReducer from './researchSlice';

export const store = configureStore({
  reducer: {
    research: researchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;