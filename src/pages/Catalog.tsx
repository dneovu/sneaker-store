import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSneakers } from '../store/sneakersSlice';
import PageWrapper from '../components/wrappers/PageWrapper';
import Header from '../components/common/Header';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import CatalogSection from '../components/CatalogSection';
import FilterSection from '../components/FilterSection/FilterSection';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.sneakers);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchSneakers());
    }
  }, [dispatch, items.length]);

  if (loading) return;

  return (
    <PageWrapper>
      <Header isCatalogPage />
      <ContentWrapper>
        <div className="flex gap-16 xl:mt-2">
          <FilterSection />
          <CatalogSection />
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Catalog;
