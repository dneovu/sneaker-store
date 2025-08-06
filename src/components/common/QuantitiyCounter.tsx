import MinusIcon from '../../assets/minus.svg?react';
import PlusIcon from '../../assets/plus.svg?react';

interface QuantitiyCounterProps {
  quantity: number;
  onClick: (action: 'dec' | 'inc') => void;
}

const QuantitiyCounter = ({ quantity, onClick }: QuantitiyCounterProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="size-4 cursor-pointer" onClick={() => onClick('dec')}>
        <MinusIcon className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
      </button>
      <div className="text-secondary flex size-12 items-center justify-center rounded-xl border border-gray-300 font-bold select-none">
        {quantity}
      </div>
      <button className="size-4 cursor-pointer" onClick={() => onClick('inc')}>
        <PlusIcon className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
      </button>
    </div>
  );
};

export default QuantitiyCounter;
