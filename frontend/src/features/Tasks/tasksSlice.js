import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  error: null,
};
const loadTasks = createAsyncThunk('tasks/loadTasks', async () => {
  const response = await fetch('http://localhost:3001/pets');
  const body = await response.json();
  if (body.error) {
    throw new Error(body.error);
  }
  return body.data;
});
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},

  extraReducers: {
    [loadTasks.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null
    },
    [loadTasks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.tasks = action.payload;
    },
    [loadTasks.rejected]: (satate, action) => {}, 
  },
});

export { loadTasks };
export default tasksSlice.reducer;
