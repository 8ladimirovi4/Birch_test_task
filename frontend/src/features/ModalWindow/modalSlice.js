import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '',
  addModalIsOpen: false,
  delModalIsOpen: false,
  editModalIsOpen: false,
  taskid: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.addModalIsOpen = true;
    },
    closeAddModal: (state) => {
      state.addModalIsOpen = false;
    },
    openDelModal: (state) => {
      state.delModalIsOpen = true;
    },
    closeDelModal: (state) => {
      state.delModalIsOpen = false;
    },
    openEditModal: (state) => {
      state.editModalIsOpen = true;
    },
    closeEditModal: (state) => {
      state.editModalIsOpen = false;
    },
    getTaskId: (state, action) => {
      state.taskid = action.payload;
    },
  },
});

export const {
  openAddModal,
  closeAddModal,
  openDelModal,
  closeDelModal,
  getTaskId,
  closeEditModal,
  openEditModal
} = modalSlice.actions;
export default modalSlice.reducer;
