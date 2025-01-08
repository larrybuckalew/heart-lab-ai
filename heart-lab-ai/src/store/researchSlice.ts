import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResearchState {
  projects: string[];
  selectedProject: string | null;
}

const initialState: ResearchState = {
  projects: [
    'Cardiac Disease Prediction',
    'Heart Rate Variability Analysis',
    'Machine Learning in Cardiology'
  ],
  selectedProject: null
};

const researchSlice = createSlice({
  name: 'research',
  initialState,
  reducers: {
    selectProject: (state, action: PayloadAction<string>) => {
      state.selectedProject = action.payload;
    },
    addProject: (state, action: PayloadAction<string>) => {
      state.projects.push(action.payload);
    }
  }
});

export const { selectProject, addProject } = researchSlice.actions;
export default researchSlice.reducer;