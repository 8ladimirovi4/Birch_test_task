import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAddModal: (state, action) => {
      state.isOpen = true;
    },
    closeAddModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openAddModal, closeAddModal } = modalSlice.actions;
export default modalSlice.reducer;
