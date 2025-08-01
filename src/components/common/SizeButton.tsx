import { SizesFilterState } from '../../store/catalogFilterSlice';

interface SizeButtonProps {
  size: SizesFilterState;
  onChange: (e: React.ChangeEvent<HTMLDivElement>) => void;
}

const SizeButton = ({ size, onChange }: SizeButtonProps) => {
  return (
    <label
      htmlFor={size.id}
      className={`text-secondary flex size-12 cursor-pointer items-center justify-center rounded-xl border font-bold select-none ${size.isSelected ? 'border-primary border-2' : 'border-gray-300'}`}
    >
      <input
        type="checkbox"
        id={size.id}
        name="size"
        value={size.id}
        checked={size.isSelected}
        onChange={onChange}
        className="hidden"
      />
      {size.value}
    </label>
  );
};

export default SizeButton;
