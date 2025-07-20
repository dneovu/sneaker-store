import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCollectionByName } from '../firebase/utils';
import { Brand } from '../types/brand';

interface BrandState {
  items: Brand[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchBrands = createAsyncThunk<Brand[]>(
  'brands/fetchBrands',
  () => getAllCollectionByName('brands') as Promise<Brand[]>
);

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default brandsSlice.reducer;
