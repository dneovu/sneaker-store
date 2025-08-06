import { CartItem } from '../../../store/cartSlice';
import CartSectionItem from './CartSectionItem';

const CartSection = ({ items }: { items: CartItem[] }) => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-lg font-bold md:text-2xl">Ваша корзина</h1>
      {items.length ? (
        <div className="space-y-5">
          {items.map((item) => (
            <CartSectionItem item={item} key={item.id + item.size} />
          ))}
        </div>
      ) : (
        <p className="font-medium">Корзина пуста</p>
      )}
    </section>
  );
};

export default CartSection;
