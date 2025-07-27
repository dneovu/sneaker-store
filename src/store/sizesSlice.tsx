import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCollectionByName } from '../firebase/utils';
import { Size } from '../types/size';

interface SizeState {
  items: Size[];
  loading: boolean;
  error: string | null;
}

const initialState: SizeState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchSizes = createAsyncThunk<Size[]>(
  'sizes/fetchSizes',
  () => getAllCollectionByName('sizes') as Promise<Size[]>
);

const sizesSlice = createSlice({
  name: 'sizes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSizes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSizes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchSizes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default sizesSlice.reducer;
