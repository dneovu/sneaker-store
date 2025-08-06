import { useEffect } from 'react';
import { useAppSelector } from '../hooks/redux';

export default function CartSync() {
  const items = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  return null;
}
