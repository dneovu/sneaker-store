import { SizesFilterState } from '../../store/catalogFilterSlice';
import SizeButton from '../common/SizeButton';

interface ChooseSizeProps {
  sizes: SizesFilterState[];
  setChoosenSizeId: (id: string | null) => void;
}

const ChooseSize = ({ sizes, setChoosenSizeId }: ChooseSizeProps) => {
  return (
    <ul className="flex flex-wrap gap-3">
      {sizes.map((size) => (
        <li className="space-y-3.5 space-x-3" key={size.id}>
          <SizeButton
            type="radio"
            size={size}
            onChange={() => setChoosenSizeId(size.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ChooseSize;
