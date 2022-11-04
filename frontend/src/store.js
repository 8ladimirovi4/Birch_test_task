import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasksSlice';


export default configureStore({
  reducer: {
    pets: tasksSlice,
  },
});
