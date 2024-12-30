import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  id: string;
  project_name: string;
}

const initialState: ProjectState = {
  id: '',
  project_name: ''
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<ProjectState>) => {
      state.id = action.payload.id;
      state.project_name = action.payload.project_name;
    }
  }
});

export const { setProject } = projectSlice.actions;
export default projectSlice.reducer;