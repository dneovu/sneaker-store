import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCollectionByName, getSneakerById } from '../firebase/utils';
import { Sneaker } from '../types/sneaker';

interface SneakerState {
  items: Sneaker[];
  byId: Record<string, Sneaker>;
  loading: boolean;
  error: string | null;
}

const initialState: SneakerState = {
  items: [],
  byId: {},
  loading: false,
  error: null,
};

export const fetchSneakers = createAsyncThunk<Sneaker[]>(
  'sneakers/fetchSneakers',
  () => getAllCollectionByName('sneakers') as Promise<Sneaker[]>
);

export const fetchSneakerById = createAsyncThunk<Sneaker, string>(
  'sneakers/fetchSneakerById',
  (id: string) => getSneakerById(id) as Promise<Sneaker>
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
        state.error = action.error.message || 'Failed to fetch sneakers';
      })
      .addCase(fetchSneakerById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSneakerById.fulfilled, (state, action) => {
        const sneaker = action.payload;
        state.byId[sneaker.id] = sneaker;
        state.loading = false;
      })
      .addCase(fetchSneakerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch current sneaker';
      });
  },
});

export default sneakersSlice.reducer;
