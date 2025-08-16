import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchSneakers } from '@/store/sneakersSlice';
import PageWrapper from '@/components/wrappers/PageWrapper';
import Header from '@/components/common/Header';
import ContentWrapper from '@/components/wrappers/ContentWrapper';
import CatalogSection from '@/components/CatalogPage/CatalogSection';
import FilterSection from '@/components/CatalogPage/FilterSection/FilterSection';
import filterImg from '@/assets/catalogSection/filter.png';

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
      <button
        className="fixed right-4 bottom-4 flex size-12 items-center justify-center rounded-full bg-black lg:hidden"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <img src={filterImg} className="size-8" alt="Filter" />
      </button>
      <Header />
      <ContentWrapper>
        <div className="flex gap-16 xl:mt-2">
          <div className="hidden w-[302px] lg:block">
            <FilterSection />
          </div>

          <CatalogSection />
        </div>

        {/* mobile */}
        <div
          className={`inset-0 z-50 flex flex-col bg-white p-4 ${isFilterOpen ? 'fixed' : 'hidden'} lg:hidden`}
        >
          <button
            className="absolute mt-2 mr-2 self-end text-2xl font-bold"
            onClick={() => setIsFilterOpen(false)}
          >
            ×
          </button>

          <div className="mt-4 overflow-y-auto px-4">
            <FilterSection />
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Catalog;
