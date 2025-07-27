import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '../types/brand';
import { Size } from '../types/size';

type PriceFilterState = {
  from: number;
  to: number;
};

export type BrandsFilterState = Brand & {
  isSelected: boolean;
};

export type SizesFilterState = Size & {
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
    changeChoosenSize: (state, action: PayloadAction<string>) => {
      const sizeId = action.payload;
      state.filterSizes = state.filterSizes.map((size) => {
        if (size.id === sizeId) {
          size.isSelected = !size.isSelected;
        }
        return size;
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
    createSelectedSizes: (state, action: PayloadAction<Size[]>) => {
      const sizes = action.payload;
      state.filterSizes = sizes.map((size) => ({
        ...size,
        isSelected: false,
      }));
    },
  },
});

export const {
  changeChoosenBrand,
  changeChoosenSize,
  changePrice,
  createSelectedBrands,
  createSelectedSizes,
} = catalogFilterSlice.actions;

export default catalogFilterSlice.reducer;
