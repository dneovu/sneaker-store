import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchSneakers } from '@/store/sneakersSlice';
import PageWrapper from '@/components/wrappers/PageWrapper';
import Header from '@/components/common/Header';
import ContentWrapper from '@/components/wrappers/ContentWrapper';
import CatalogSection from '@/components/CatalogPage/CatalogSection';
import FilterSection from '@/components/CatalogPage/FilterSection/FilterSection';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.sneakers);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchSneakers());
    }
  }, [dispatch, items.length]);

  if (loading) return;

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <button
          className="absolute right-0 mr-8 text-lg font-bold lg:hidden"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          Фильтры
        </button>

        <div className="flex gap-16 xl:mt-2">
          <div className="hidden w-[302px] lg:block">
            <FilterSection />
          </div>

          <CatalogSection />
        </div>

        {/* mobile */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white p-4 lg:hidden">
            <button
              className="absolute mt-2 self-end text-2xl font-bold"
              onClick={() => setIsFilterOpen(false)}
            >
              ×
            </button>

            <div className="mt-4 overflow-y-auto px-4">
              <FilterSection />
            </div>
          </div>
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Catalog;
