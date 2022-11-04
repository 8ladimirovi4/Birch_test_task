import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  error: null,
};
const loadPets = createAsyncThunk(
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
    initialState: initialState,
    reducers: {},

extraReducers: (builder) => {
    builder
    .addCase(loadPets.rejected,(state, action) => {
        state.error = action.error.message
    })
    .addCase(loadPets.fulfilled, (state, action) => {
        const newPets = action.payload
state.list = newPets // action.payload - питомцы из базы
state.error = null
    })
}
});
export { loadPets }; // то что мы будем диспатчем отправлять сюда
export const getPetList = (state) => state.pets.list; // pet - идентификатор из store, list - initialState
export const getPetError = (state) => state.pets.error;

export default tasksSlice.reducer;
