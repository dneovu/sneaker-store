import { SizesFilterState } from '@/store/catalogFilterSlice';

interface SizeButtonProps {
  size: SizesFilterState;
  onChange: (e: React.ChangeEvent<HTMLDivElement>) => void;
  type?: 'checkbox' | 'radio';
}

const SizeButton = ({ size, onChange, type = 'checkbox' }: SizeButtonProps) => {
  return (
    <label htmlFor={size.id} className="cursor-pointer">
      <input
        type={type}
        id={size.id}
        name="size"
        value={size.id}
        checked={size.isSelected}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className="peer-checked:border-primary peer-checked:text-primary text-secondary flex size-12 items-center justify-center rounded-xl border border-gray-300 font-bold transition-colors select-none peer-checked:border-2">
        {/* for catalog page and checbox type value = size, for item page and radio type value = quantity, so i use id instead*/}
        {type === 'checkbox' ? size.value : size.id}
      </div>
    </label>
  );
};

export default SizeButton;
