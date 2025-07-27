import { useAppDispatch } from '../../hooks/redux';
import {
  changeChoosenSize,
  SizesFilterState,
} from '../../store/catalogFilterSlice';

interface SizeFilterProps {
  filterSizes: SizesFilterState[];
}

const SizeFilter = ({ filterSizes }: SizeFilterProps) => {
  const dispatch = useAppDispatch();

  return (
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
  );
};

export default SizeFilter;
