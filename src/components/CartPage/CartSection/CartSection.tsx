import { useAppSelector } from '@/hooks/redux';
import useAuth from '@/hooks/useAuth';
import CartSectionItem from './CartSectionItem';

const CartSection = () => {
  const { isAuth } = useAuth();
  const { items, loading, loaded } = useAppSelector((state) => state.cart);

  // "loaded" state changes only during fetch
  // so check it only if user is logged in
  if (
    (isAuth && !loading && loaded && items.length === 0) ||
    (!isAuth && !loading && items.length === 0)
  ) {
    return (
      <section className="flex flex-col gap-5">
        <h1 className="text-lg font-bold md:text-2xl">Ваша корзина</h1>
        <p className="font-medium">Корзина пуста</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-lg font-bold md:text-2xl">Ваша корзина</h1>

      <div className="space-y-5">
        {items.map((item) => (
          <CartSectionItem item={item} key={item.id + item.size} />
        ))}
      </div>
    </section>
  );
};

export default CartSection;
