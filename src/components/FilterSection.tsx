import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchBrands } from '../store/brandsSlice';
import { fetchSizes } from '../store/sizesSlice';
import {
  BrandsFilterState,
  SizesFilterState,
  changeChoosenBrand,
  changeChoosenSize,
  createSelectedBrands,
  createSelectedSizes,
} from '../store/catalogFilterSlice';

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const { items: brandItems, loading: loadingBrands } = useAppSelector(
    (state) => state.brands
  );
  const { items: sizeItems, loading: loadingSizes } = useAppSelector(
    (state) => state.sizes
  );
  const { filterBrands, filterSizes } = useAppSelector(
    (state) => state.catalogFilter
  );

  useEffect(() => {
    if (!brandItems.length) {
      dispatch(fetchBrands());
    } else {
      dispatch(createSelectedBrands(brandItems));
    }

    if (!sizeItems.length) {
      dispatch(fetchSizes());
    } else {
      dispatch(createSelectedSizes(sizeItems));
    }
  }, [dispatch, brandItems, sizeItems]);

  if (loadingBrands || loadingSizes) return;

  return (
    <section className="w-[302px] lg:block">
      <div>
        <h2 className="mb-4 text-sm font-bold md:text-lg">Бренды</h2>
        <ul>
          {filterBrands.map((brand: BrandsFilterState) => (
            <li className="space-y-3.5 space-x-3" key={brand.id}>
              <input
                type="checkbox"
                name="brand"
                id={brand.id}
                value={brand.id}
                onChange={() => dispatch(changeChoosenBrand(brand.id))}
                checked={brand.isSelected}
              />
              <label
                className="text-secondary text-sm font-bold select-none"
                htmlFor={brand.id}
              >
                {brand.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-sm font-bold md:text-lg">Размеры</h2>
        <ul>
          {filterSizes.map((size: SizesFilterState) => (
            <li className="space-y-3.5 space-x-3" key={size.id}>
              <input
                type="checkbox"
                name="brand"
                id={size.id}
                value={size.id}
                onChange={() => dispatch(changeChoosenSize(size.id))}
                checked={size.isSelected}
              />
              <label
                className="text-secondary text-sm font-bold select-none"
                htmlFor={size.id}
              >
                {size.value}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterSection;
