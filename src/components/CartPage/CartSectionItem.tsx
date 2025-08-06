import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CartItem, changeQuantity } from '../../store/cartSlice';
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
    <div className="bg-background relative flex items-center justify-between px-4 py-2 md:px-8 md:py-6">
      <div className="flex items-center justify-center gap-6">
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
          <p className="font-medium">
            {sneaker.brand} {sneaker.model}
          </p>
          <p className="text-secondary font-medium">
            {priceFormat(sneaker.price)}
          </p>
          <p className="text-secondary font-medium">Размер: {item.size}</p>
        </div>
      </div>
      <div>
        <QuantitiyCounter quantity={counter} onClick={handleCounter} />
      </div>

      <p className="font-medium">
        {priceFormat(item.quantity * sneaker.price)}
      </p>
    </div>
  );
};

export default CartSectionItem;
