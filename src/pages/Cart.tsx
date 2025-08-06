import CartSection from '../components/CartPage/CartSection';
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
        <CartSection items={items} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Cart;
