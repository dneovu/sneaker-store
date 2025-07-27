import { configureStore } from '@reduxjs/toolkit';
import sneakerReducer from '../store/sneakersSlice';
import brandsReducer from '../store/brandsSlice';
import sizesReducer from '../store/sizesSlice';
import catalogFilterReducer from '../store/catalogFilterSlice';
import priceRangeReducer from '../store/priceRangeSlice';

export const store = configureStore({
  reducer: {
    sneakers: sneakerReducer,
    brands: brandsReducer,
    sizes: sizesReducer,
    priceRange: priceRangeReducer,
    catalogFilter: catalogFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
