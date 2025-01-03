import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CardiacRiskPredictor } from '../ml/predictionModel';

// Define the type for patient data
interface PatientData {
    age: number;
    bloodPressure: number;
    cholesterol: number;
    diabetic: boolean;
    smoker: boolean;
    familyHistory: boolean;
}

// Define the state type
interface RiskPredictionState {
    patientData: PatientData;
    prediction: {
        riskScore: number;
        riskCategory: 'Low' | 'Medium' | 'High';
    } | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Initial state
const initialState: RiskPredictionState = {
    patientData: {
        age: 40,
        bloodPressure: 120,
        cholesterol: 200,
        diabetic: false,
        smoker: false,
        familyHistory: false
    },
    prediction: null,
    status: 'idle',
    error: null
};

// Async thunk for prediction
export const predictRisk = createAsyncThunk(
    'riskPrediction/predictRisk',
    async (_, { getState }) => {
        const state = getState() as { riskPrediction: RiskPredictionState };
        return CardiacRiskPredictor.predictCardiacRisk(state.riskPrediction.patientData);
    }
);

// Create the slice
const riskPredictionSlice = createSlice({
    name: 'riskPrediction',
    initialState,
    reducers: {
        updatePatientData: (state, action: PayloadAction<Partial<PatientData>>) => {
            state.patientData = { ...state.patientData, ...action.payload };
        },
        resetPrediction: (state) => {
            state.prediction = null;
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(predictRisk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(predictRisk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.prediction = action.payload;
            })
            .addCase(predictRisk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Prediction failed';
            });
    }
});

export const { updatePatientData, resetPrediction } = riskPredictionSlice.actions;

export default riskPredictionSlice.reducer;