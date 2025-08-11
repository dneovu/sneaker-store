import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import useAuth from '../../../hooks/useAuth';
import {
  CartItem,
  proceedCheckout,
  saveCartToFirebase,
} from '../../../store/cartSlice';
import {
  createOrder,
  fetchOrders,
  OrderSneaker,
} from '../../../store/orderSlice';
import MainButton from '../../common/MainButton';
import CheckoutSectionPriceInfo from './CheckoutSectionPriceInfo';

const CheckoutSection = ({ items }: { items: CartItem[] }) => {
  const sneakersById = useAppSelector((state) => state.sneakers.byId);
  const dispatch = useAppDispatch();
  const { isAuth, id } = useAuth();

  let subTotal = 0;

  const sneakersToOrder = items.map((item) => {
    const sneakerFromFirebase = sneakersById[item.id];
    // subtotal for all sneakers in the cart
    subTotal += item.quantity * sneakerFromFirebase?.price;

    return {
      ...item,
      price: sneakerFromFirebase?.price,
      brand: sneakerFromFirebase?.brand,
      model: sneakerFromFirebase?.model,
    } as OrderSneaker;
  });

  const delivery = 0;

  if (!subTotal) return;

  const handleCheckout = async () => {
    if (!isAuth) {
      alert('Вы должны войти в аккаунт');
      return;
    }

    try {
      const resultAction = await dispatch(
        createOrder({
          userId: id ?? '',
          items: sneakersToOrder,
          total: subTotal,
        })
      );

      if (createOrder.fulfilled.match(resultAction)) {
        await dispatch(saveCartToFirebase({ userId: id ?? '', items: [] }));

        await dispatch(fetchOrders(id ?? ''));

        dispatch(proceedCheckout());
        alert('Заказ оформлен');
      } else {
        console.error();
      }
    } catch (err) {
      console.error(err);
      alert('Произошла ошибка при оформлении заказа');
    }
  };

  return (
    <section>
      <div className="mb-8">
        <h2 className="font-medium">О заказе</h2>
      </div>
      <div className="space-y-3 border-b border-gray-300 pb-5">
        <CheckoutSectionPriceInfo text="Стоимость" price={subTotal} />
        <CheckoutSectionPriceInfo text="Доставка" price={delivery} />
      </div>
      <div className="mt-5 mb-16">
        <CheckoutSectionPriceInfo text="Итого" price={subTotal + delivery} />
      </div>
      <MainButton text="Перейти к оформлению" onClick={handleCheckout} />
    </section>
  );
};

export default CheckoutSection;
