import Header from '../components/common/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import HomePromoWrapper from '../components/wrappers/HomePromoWrapper';
import PromoSlider from '../components/PromoSlider';
import NewArrivalsSection from '../components/NewArrivalsSection';

const Home = () => {
  return (
    <PageWrapper>
      <HomePromoWrapper>
        <Header isBorder={false} />
        <ContentWrapper>
          <PromoSlider />
        </ContentWrapper>
      </HomePromoWrapper>
      <ContentWrapper>
        <NewArrivalsSection />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
