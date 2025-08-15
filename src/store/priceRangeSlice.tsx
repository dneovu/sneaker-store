import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPriceRange } from '@/firebase/utils';
import { PriceRange } from '@/types/meta';

interface PriceRangeState {
  items: PriceRange | null;
  loading: boolean;
  error: string | null;
}

const initialState: PriceRangeState = {
  items: null,
  loading: false,
  error: null,
};

export const fetchPriceRange = createAsyncThunk<PriceRange>(
  'brands/fetchPriceRange',
  getPriceRange
);

const priceRangeSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPriceRange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPriceRange.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPriceRange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default priceRangeSlice.reducer;
