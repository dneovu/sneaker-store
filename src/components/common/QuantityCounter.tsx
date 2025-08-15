import MinusIcon from '@/assets/quantityCounter/minus.svg?react';
import PlusIcon from '@/assets/quantityCounter/plus.svg?react';

interface QuantityCounterProps {
  quantity: number;
  onClick: (action: 'dec' | 'inc') => void;
  min?: number;
  max?: number;
}

const QuantityCounter = ({
  quantity,
  onClick,
  min,
  max,
}: QuantityCounterProps) => {
  const isMin = quantity === min || quantity === 0;
  const isMax = quantity === max || quantity === 0;
  const defaultIconStyle =
    'hover:stroke-primary fill-none stroke-black transition-all duration-100';
  const limitValueIconStyle = 'fill-none stroke-gray-300';

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className={`size-4 ${isMin ? 'cursor-auto' : 'cursor-pointer'}`}
        onClick={() => onClick('dec')}
      >
        <MinusIcon
          className={`${isMin ? limitValueIconStyle : defaultIconStyle}`}
        />
      </button>
      <div className="text-secondary flex size-12 items-center justify-center rounded-xl border border-gray-300 font-bold select-none">
        {quantity}
      </div>
      <button
        className={`size-4 ${isMax ? 'cursor-auto' : 'cursor-pointer'}`}
        onClick={() => onClick('inc')}
      >
        <PlusIcon
          className={`${isMax ? limitValueIconStyle : defaultIconStyle}`}
        />
      </button>
    </div>
  );
};

export default QuantityCounter;
