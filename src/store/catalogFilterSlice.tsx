import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '../types/brand';

type PriceFilterState = {
  from: number;
  to: number;
};

export type BrandsFilterState = Brand & {
  isSelected: boolean;
};

type SizesFilterState = {
  value: number;
  isSelected: boolean;
};

interface CatalogFilterState {
  filterBrands: BrandsFilterState[];
  filterPrice: PriceFilterState;
  filterSizes: SizesFilterState[];
}

const initialState: CatalogFilterState = {
  filterBrands: [],
  filterPrice: {
    from: 0,
    to: 100000,
  },
  filterSizes: [],
};

export const catalogFilterSlice = createSlice({
  name: 'catalogFilter',
  initialState,
  reducers: {
    changeChoosenBrand: (state, action: PayloadAction<string>) => {
      const brandId = action.payload;
      state.filterBrands = state.filterBrands.map((brand) => {
        if (brand.id === brandId) {
          brand.isSelected = !brand.isSelected;
        }
        return brand;
      });
    },
    changePrice: (state, action: PayloadAction<PriceFilterState>) => {
      const price = action.payload;
      state.filterPrice = price;
    },
    changeSelectedSize: (state, action: PayloadAction<number>) => {
      const sizeNumber = action.payload;
      state.filterSizes = state.filterSizes.map((selectedSize) => {
        if (selectedSize.value === sizeNumber) {
          selectedSize.isSelected = !selectedSize.isSelected;
        }
        return selectedSize;
      });
    },
    createSelectedBrands: (state, action: PayloadAction<Brand[]>) => {
      const brands = action.payload;
      state.filterBrands = brands.map((brand) => ({
        ...brand,
        isSelected: false,
      }));
    },
  },
});

export const {
  changeChoosenBrand,
  changeSelectedSize,
  changePrice,
  createSelectedBrands,
} = catalogFilterSlice.actions;

export default catalogFilterSlice.reducer;
