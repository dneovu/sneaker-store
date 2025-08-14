import { useEffect, useState } from 'react';
import MainButton from '../../common/MainButton';
import { SizesFilterState } from '../../../store/catalogFilterSlice';
import { addToCart, CartItem } from '../../../store/cartSlice';
import { Sneaker } from '../../../types/sneaker';
import { useAppDispatch } from '../../../hooks/redux';
import QuantityCounter from '../../common/QuantityCounter';
import useIsSizeInCart from '../../../hooks/useIsSizeInCart';

interface AddItemToCartProps {
  sizes: SizesFilterState[];
  sizeId: null | string;
  sneaker: Sneaker;
}

const AddItemToCart = ({ sizes, sizeId, sneaker }: AddItemToCartProps) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useAppDispatch();
  const isInCart = useIsSizeInCart(sizeId, sneaker);
  const sizeObj = sizes.find((size) => size.id === sizeId);

  const handleCounter = (action: 'dec' | 'inc') => {
    if (action === 'dec') {
      if (counter > 1) setCounter((prev) => prev - 1);
    } else {
      if (sizeObj) {
        setCounter((prev) => Math.min(sizeObj.value, prev + 1));
      }
    }
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: sneaker.id,
      size: Number(sizeId),
      quantity: counter,
    };
    if (!(sneaker.id && sizeId && counter)) return;

    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    if (sizeId !== null) setCounter(1);
  }, [sizeId]);

  return (
    <div className="flex gap-8">
      <QuantityCounter
        quantity={counter}
        min={1}
        max={sizeObj?.value}
        onClick={handleCounter}
      />

      <MainButton
        text={isInCart ? 'Уже в корзине' : 'В корзину'}
        isDisabled={sizeId === null || isInCart}
        onClick={handleAddToCart}
      />
    </div>
  );
};

export default AddItemToCart;
