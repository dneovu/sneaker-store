import Header from '../components/common/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import HomePromoWrapper from '../components/wrappers/HomePromoWrapper';
import PromoSlider from '../components/HomePage/PromoSlider/PromoSlider';
import NewArrivalsSection from '../components/HomePage/NewArrivalsSection';
import SloganSection from '../components/HomePage/SloganSection';
import HomeFooter from '../components/HomePage/HomeFooter';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSneakers } from '../store/sneakersSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.sneakers);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchSneakers());
    }
  }, [dispatch, items.length]);

  if (loading) {
    return;
  }

  return (
    <PageWrapper>
      <HomePromoWrapper>
        <Header />
        <PromoSlider items={items} />
      </HomePromoWrapper>
      <ContentWrapper>
        <div className="mt-4 md:mt-8 xl:mt-24">
          <NewArrivalsSection />
        </div>
        <div className="mt-8 md:mt-16">
          <SloganSection />
        </div>
      </ContentWrapper>
      <ContentWrapper isMain={false} className="mt-8 md:mt-16">
        <HomeFooter />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
