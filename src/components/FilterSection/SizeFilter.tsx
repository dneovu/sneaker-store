import { useAppDispatch } from '../../hooks/redux';
import {
  changeChoosenSize,
  SizesFilterState,
} from '../../store/catalogFilterSlice';
import SizeButton from '../common/SizeButton';

interface SizeFilterProps {
  filterSizes: SizesFilterState[];
}

const SizeFilter = ({ filterSizes }: SizeFilterProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul className="grid grid-cols-4 gap-3">
      {filterSizes.map((size: SizesFilterState) => (
        <li className="space-y-3.5 space-x-3" key={size.id}>
          <SizeButton
            size={size}
            onChange={() => dispatch(changeChoosenSize(size.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default SizeFilter;
