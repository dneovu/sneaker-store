import { useAppDispatch } from '@/hooks/redux';
import {
  BrandsFilterState,
  changeChoosenBrand,
} from '@/store/catalogFilterSlice';

interface BrandsFilterProps {
  filterBrands: BrandsFilterState[];
}

const BrandsFilter = ({ filterBrands }: BrandsFilterProps) => {
  const dispatch = useAppDispatch();
  return (
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
  );
};

export default BrandsFilter;
