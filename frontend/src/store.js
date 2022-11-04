import { configureStore } from '@reduxjs/toolkit';
import petsSlice from './features/pets/petsSlice';

export default configureStore({
  reducer: {
    pets: petsSlice,
  },
});
