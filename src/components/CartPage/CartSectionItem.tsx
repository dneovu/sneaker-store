import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  CartItem,
  changeQuantity,
  removeFromCart,
} from '../../store/cartSlice';
import { fetchSneakerById } from '../../store/sneakersSlice';
import priceFormat from '../../utils/priceFormat';
import QuantitiyCounter from '../common/QuantitiyCounter';

const CartSectionItem = ({ item }: { item: CartItem }) => {
  const [counter, setCounter] = useState(item.quantity);
  const dispatch = useAppDispatch();
  const sneaker = useAppSelector((state) => state.sneakers.byId[item.id]);

  // to keep item up to date with firebase
  useEffect(() => {
    dispatch(fetchSneakerById(item.id));
  }, [dispatch, item]);

  const handleCounter = (action: 'dec' | 'inc') => {
    if (action === 'dec') {
      if (counter > 1) {
        setCounter((prev) => prev - 1);
        dispatch(changeQuantity({ item, type: 'dec' }));
      } else {
        dispatch(removeFromCart(item.id));
      }
    } else {
      // check if there is more avaliable sneakers for this size
      if (sneaker.sizes[item.size] > counter) {
        setCounter((prev) => prev + 1);
        dispatch(changeQuantity({ item, type: 'inc' }));
      }
    }
  };

  if (!sneaker) return 'Не удалось загрузить';

  return (
    <div className="bg-background relative flex flex-col items-baseline justify-baseline gap-5 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-6">
      <div className="flex w-full justify-between gap-4 md:w-auto md:items-center md:justify-center md:gap-6">
        <div
          className={`size-fit rounded-lg border-4 border-white bg-white px-3 py-2`}
        >
          <img
            src={sneaker.imgSrc}
            alt={`${sneaker.brand} ${sneaker.model}`}
            className="w-16 select-none"
          />
        </div>
        <div>
          <p className="text-right font-medium md:text-left">
            {sneaker.brand} {sneaker.model}
          </p>
          <p className="text-secondary text-right font-medium md:text-left">
            {priceFormat(sneaker.price)}
          </p>
          <p className="text-secondary text-right font-medium md:text-left">
            Размер: {item.size}
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between md:w-2/5">
        <div>
          <QuantitiyCounter quantity={counter} onClick={handleCounter} />
        </div>
        <p className="font-medium">
          {priceFormat(item.quantity * sneaker.price)}
        </p>
      </div>
    </div>
  );
};

export default CartSectionItem;
