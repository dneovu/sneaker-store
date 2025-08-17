import CartSection from '@/components/CartPage/CartSection/CartSection';
import CheckoutSection from '@/components/CartPage/CheckoutSection/CheckoutSection';
import Header from '@/components/common/Header';
import ContentWrapper from '@/components/wrappers/ContentWrapper';
import PageWrapper from '@/components/wrappers/PageWrapper';
import Footer from '@/components/common/Footer';

const Cart = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <div className="md:min-h-screen">
          <div className="mb-16 flex w-full flex-1 flex-wrap gap-8 lg:flex-nowrap lg:gap-16">
            <div className="flex-7/10">
              <CartSection />
            </div>
            <div className="flex-3/10">
              <CheckoutSection />
            </div>
          </div>
        </div>
        <Footer />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Cart;
