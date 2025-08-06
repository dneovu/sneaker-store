import { Sneaker } from '../types/sneaker';
import { useAppSelector } from './redux';

const useIsSizeInCart = (sizeId: null | string, sneaker: Sneaker) => {
  const cartItems = useAppSelector((store) => store.cart.items);

  return !!cartItems.find(
    (item) => item.id === sneaker.id && item.size === Number(sizeId)
  );
};

export default useIsSizeInCart;
