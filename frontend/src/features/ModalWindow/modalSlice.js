import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  addModalIsOpen: false,
  delModalIsOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAddModal: (state, action) => {
      state.addModalIsOpen = true;
    },
    closeAddModal: (state, action) => {
      state.addModalIsOpen = false;
    },
    openDelModal: (state, action) => {
      state.delModalIsOpen = true;
    },
    closeDelModal: (state, actio) => {
      state.delModalIsOpen = false
    }
  },
});

export const { openAddModal, closeAddModal, openDelModal, closeDelModal } = modalSlice.actions;
export default modalSlice.reducer;
