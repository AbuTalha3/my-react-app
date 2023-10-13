import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  loading: false,
  error: null,
  meals: [],
};

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
  const response = await axios('https://www.themealdb.com/api/json/v1/1/categories.php');
  return response.data.categories;
});
const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.loading = false;
      state.meals = action.payload;
    });
    builder.addCase(fetchMeals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default mealsSlice.reducer;
