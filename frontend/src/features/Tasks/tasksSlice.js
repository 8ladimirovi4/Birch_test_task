import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  error: null,
};
const loadTasks = createAsyncThunk(
  'pets/loadPets', // action type (получить логи в дев тулзах)
    async () => {
    const response = await fetch('http://localhost:3001/pets')
    const body = await response.json()
        if (body.error) {
          throw new Error(body.error);
        }
        return body.data;
      }
  );
const tasksSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {},

extraReducers: (builder) => {
   
}
});


export default tasksSlice.reducer;
