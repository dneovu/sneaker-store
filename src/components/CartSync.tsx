import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useAuth from '@/hooks/useAuth';
import { fetchCart, saveCartToFirebase, setCart } from '@/store/cartSlice';

export default function CartSync() {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { isAuth, id } = useAuth();

  // for auth user we work with firebase cart
  // if user is anonymous - use localstorage
  // fetchCart() automatically sets cart state

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchCart(id ?? ''));
      console.log('fetch');
    } else {
      const localCart = localStorage.getItem('cart');
      if (localCart) {
        dispatch(setCart(JSON.parse(localCart)));
      }
    }
  }, [isAuth, dispatch]);

  useEffect(() => {
    if (isAuth) {
      console.log('save fb cart');

      dispatch(
        saveCartToFirebase({
          userId: id ?? '',
          items: items,
        })
      );
    } else {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items, dispatch]);

  return null;
}
