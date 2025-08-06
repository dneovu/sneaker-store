import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { CartItem, proceedCheckout } from '../../../store/cartSlice';
import MainButton from '../../common/MainButton';
import CheckoutSectionPriceInfo from './CheckoutSectionPriceInfo';

const CheckoutSection = ({ items }: { items: CartItem[] }) => {
  const sneakersById = useAppSelector((state) => state.sneakers.byId);
  const dispatch = useAppDispatch();

  const subTotal = items.reduce((total, item) => {
    const price = sneakersById[item.id]?.price * item?.quantity;
    return total + price;
  }, 0);
  const delivery = 0;

  if (!subTotal) return;

  const handleCheckout = () => {
    dispatch(proceedCheckout());
    alert('Заказ оформлен');
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
