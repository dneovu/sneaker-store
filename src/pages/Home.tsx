import Header from '../components/common/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import HomePromoWrapper from '../components/wrappers/HomePromoWrapper';
import PromoSlider from '../components/PromoSlider/PromoSlider';
import NewArrivalsSection from '../components/NewArrivalsSection';
import SloganSection from '../components/SloganSection';
import HomeFooter from '../components/HomeFooter';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSneakers } from '../store/sneakersSlice';
import { addSneakers } from '../firebase/utils';

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
        <Header isBorder={false} />
        <PromoSlider items={items} />
      </HomePromoWrapper>
      <ContentWrapper>
        <div className="mt-8 xl:mt-24">
          <NewArrivalsSection />
        </div>
        <div className="mt-24">
          <SloganSection />
        </div>
      </ContentWrapper>
      <ContentWrapper isMain={false} className="mt-32">
        <button onClick={addSneakers}>Add sneakers</button>
        <HomeFooter />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
