import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchBrands } from '../store/brandsSlice';
import {
  BrandsFilterState,
  changeChoosenBrand,
  createSelectedBrands,
} from '../store/catalogFilterSlice';

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.brands);
  const { filterBrands } = useAppSelector((state) => state.catalogFilter);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchBrands());
    } else {
      dispatch(createSelectedBrands(items));
    }
  }, [dispatch, items]);

  if (loading) return;

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
    </section>
  );
};

export default FilterSection;
