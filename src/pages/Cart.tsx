import CartSection from '../components/CartPage/CartSection/CartSection';
import CheckoutSection from '../components/CartPage/CheckoutSection/CheckoutSection';
import Header from '../components/common/Header';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PageWrapper from '../components/wrappers/PageWrapper';
import { useAppSelector } from '../hooks/redux';

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <div className="flex w-full flex-wrap gap-8 lg:flex-nowrap lg:gap-16">
          <div className="flex-7/10">
            <CartSection items={items} />
          </div>
          <div className="flex-3/10">
            <CheckoutSection items={items} />
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Cart;
