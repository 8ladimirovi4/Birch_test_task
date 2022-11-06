import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  text: {},
  error: null,
  status: null,
};

const loadTasks = createAsyncThunk(
  'tasks/loadTasks',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('http://localhost:3001/tasks');
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

const loadText = createAsyncThunk(
  'tasks/loadText',
  async function (id, {rejectWithValue}) {
    try {
      const response = await fetch(`http://localhost:3001/text/${id}`)
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

const delTask =  createAsyncThunk(
  'tasks/delTask',
  async function (id, {rejectWithValue, dispatch}) {
try {
  const response = await fetch (`http://localhost:3001/tasks/${id}`,{
    method: "DELETE",
  })
  if(!response.ok){
    throw new Error ('Can\'t delete task, Server error')
  }
  dispatch(removeTask(id));
} catch (error) {
  return rejectWithValue(error.message)
}
  }
)

const createTask = createAsyncThunk(
  'tasks/createTask',
  async function (value, { rejectWithValue, dispatch }) {
try {
  const response = await fetch('http://localhost:3001/tasks',{
    method: "POST",
    body: JSON.stringify({label: value}),
    headers: { "Content-Type": "application/json" }
  })
  if(!response.ok){
    throw new Error ('task didn\'t post')
  }
  const data = await response.json()
  dispatch(addTask(data))
} catch (error) {
  return rejectWithValue(error.message)
}
  }
)

const createText = createAsyncThunk(
  'tassks/createText',
  async function (value,{rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`http://localhost:3001/text`,{
        method: 'POST',
        body: JSON.stringify({
          text: value, 
        }),
        headers: { "Content-Type": "application/json" }
      })
      if(!response.ok){
        throw new Error ('text didn\'t create')
      }
      const data = await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const editTask = createAsyncThunk(
  'task/editTask',
  async function ({ value, id }, {rejectWithValue, dispatch}) {
    console.log(value);
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`,{
        method: "PUT",
        body: JSON.stringify({
          label: value
        }),
        headers: { "Content-Type": "application/json" },
      })
      if(!response.ok){
        throw new Error ('Can\'t edit tasr. Server error')
      }
      const data = await response.json()
    } catch (error) {
      rejectWithValue(error.messge)
    }
    }
)


const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(el => el.id !== action.payload)
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload)
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
    [loadText.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [loadText.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.text = action.payload;
    },
    [loadText.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const { removeTask, addTask } = tasksSlice.actions
export { loadTasks, delTask, createTask, loadText, createText, editTask };
export default tasksSlice.reducer;
