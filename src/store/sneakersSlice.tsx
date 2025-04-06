import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllSneakers } from '../firebase/utils';
import { Sneaker } from '../types/sneaker';

interface SneakerState {
  items: Sneaker[];
  loading: boolean;
  error: string | null;
}

const initialState: SneakerState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchSneakers = createAsyncThunk<Sneaker[]>(
  'sneakers/fetchSneakers',
  getAllSneakers
);

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSneakers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSneakers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchSneakers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default sneakersSlice.reducer;
