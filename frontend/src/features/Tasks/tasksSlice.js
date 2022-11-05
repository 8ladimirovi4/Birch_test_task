import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  error: null,
};

const loadTasks = createAsyncThunk(
  'tasks/loadTasks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('http://localhost:3001/pets');
      const body = await response.json();
      if (body.error) {
        throw new Error(body.error);
      }
      return body.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const delTasks =  createAsyncThunk(
  'tasks/delTasks',
  async function (id, {rejectWithValue, dispatch}) {
try {
  const response = await fetch (`http://localhost:3001/pets/${id}`,{
    method: "DELETE",
  })
  console.log('response', response)
  if(!response.ok){
    throw new Error ('Can\'t delete task, Server error')
  }
  dispatch(removeTask(id));

} catch (error) {
  return rejectWithValue(error.message)
}
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(el => el.id !== action.payload.id)
      console.log(removeTask())
    }
  },

  extraReducers: {
    [loadTasks.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [loadTasks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.tasks = action.payload;
    },
    [loadTasks.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [delTasks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.tasks = action.payload;
    },
  },
});

export const { removeTask } = tasksSlice.actions
export { loadTasks };
export default tasksSlice.reducer;
