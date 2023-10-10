import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './meal';

const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
});

export default store;
