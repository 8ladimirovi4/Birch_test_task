import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './features/ModalWindow/modalSlice';
import tasksSlice from './features/Tasks/tasksSlice';



export default configureStore({
  reducer: {
    modal: modalSlice,
    tasks: tasksSlice
  },
});
