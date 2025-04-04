import Header from '../components/common/Header';
import PageWrapper from '../components/wrappers/PageWrapper';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import HomePromoWrapper from '../components/wrappers/HomePromoWrapper';
import PromoSlider from '../components/PromoSlider';
import NewArrivalsSection from '../components/NewArrivalsSection';
import SloganSection from '../components/SloganSection';
import HomeFooter from '../components/HomeFooter';

const Home = () => {
  return (
    <PageWrapper>
      <HomePromoWrapper>
        <Header isBorder={false} />
        <PromoSlider />
      </HomePromoWrapper>
      <ContentWrapper>
        <div className="mt-6 xl:mt-20">
          <NewArrivalsSection />
        </div>
        <div className="mt-24">
          <SloganSection />
        </div>
      </ContentWrapper>
      <ContentWrapper isMain={false} className="mt-32">
        <HomeFooter />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Home;
