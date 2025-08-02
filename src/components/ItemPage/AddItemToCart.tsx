import { useEffect, useState } from 'react';
import MinusIcon from '../../assets/minus.svg?react';
import PlusIcon from '../../assets/plus.svg?react';
import MainButton from '../common/MainButton';
import { SizesFilterState } from '../../store/catalogFilterSlice';

interface AddItemToCartProps {
  sizes: SizesFilterState[];
  sizeId: null | string;
}

const AddItemToCart = ({ sizes, sizeId }: AddItemToCartProps) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (action: 'dec' | 'inc') => {
    if (action === 'dec') {
      if (counter > 1) setCounter((prev) => prev - 1);
    } else {
      const sizeObj = sizes.find((size) => size.id === sizeId);
      if (sizeObj) {
        setCounter((prev) => Math.min(sizeObj.value, prev + 1));
      }
    }
  };

  useEffect(() => {
    if (sizeId !== null) setCounter(1);
  }, [sizeId]);

  return (
    <div className="flex gap-8">
      <div className="flex items-center justify-center gap-4">
        <button
          className="size-4 cursor-pointer"
          onClick={() => handleCounter('dec')}
        >
          <MinusIcon className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </button>
        <div className="text-secondary flex size-12 items-center justify-center rounded-xl border border-gray-300 font-bold select-none">
          {counter}
        </div>
        <button
          className="size-4 cursor-pointer"
          onClick={() => handleCounter('inc')}
        >
          <PlusIcon className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </button>
      </div>

      <MainButton
        text="В корзину"
        isDisabled={sizeId === null}
        onClick={() =>
          console.log('size id: %d, quantity: %d', sizeId, counter)
        }
      />
    </div>
  );
};

export default AddItemToCart;
