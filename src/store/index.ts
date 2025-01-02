import { configureStore } from '@reduxjs/toolkit';
import researchReducer from './researchSlice';
import riskPredictionReducer from './riskPredictionSlice';

export const store = configureStore({
  reducer: {
    research: researchReducer,
    riskPrediction: riskPredictionReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false // Disable serializable check for complex objects
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;