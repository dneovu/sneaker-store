import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchBrands } from '@/store/brandsSlice';
import { fetchSizes } from '@/store/sizesSlice';
import {
  changePrice,
  createSelectedBrands,
  createSelectedSizes,
} from '@/store/catalogFilterSlice';
import RangeInput from './RangeInput';
import { fetchPriceRange } from '@/store/priceRangeSlice';
import BrandsFilter from './BrandsFilter';
import SizeFilter from './SizeFilter';
import Skeleton from 'react-loading-skeleton';

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const { items: brandItems, loading: loadingBrands } = useAppSelector(
    (state) => state.brands
  );
  const { items: sizeItems, loading: loadingSizes } = useAppSelector(
    (state) => state.sizes
  );
  const { items: priceRange, loading: loadingPrices } = useAppSelector(
    (state) => state.priceRange
  );
  const { filterBrands, filterSizes } = useAppSelector(
    (state) => state.catalogFilter
  );

  useEffect(() => {
    if (!brandItems.length) {
      dispatch(fetchBrands());
    } else {
      dispatch(createSelectedBrands(brandItems));
    }

    if (!sizeItems.length) {
      dispatch(fetchSizes());
    } else {
      dispatch(createSelectedSizes(sizeItems));
    }

    if (!priceRange) {
      dispatch(fetchPriceRange());
    } else {
      dispatch(changePrice(priceRange));
    }
  }, [dispatch, brandItems, sizeItems, priceRange]);

  return (
    <section className="sticky top-8">
      <div className="border-b border-gray-300 pb-6">
        <h2 className="mb-4 font-bold md:text-lg">Бренды</h2>
        {loadingBrands ? (
          <Skeleton count={4} height={20} className="mb-2" />
        ) : (
          <BrandsFilter filterBrands={filterBrands} />
        )}
      </div>

      <div className="border-b border-gray-300 py-6">
        <h2 className="mb-4 font-bold md:text-lg">Стоимость</h2>
        {loadingPrices ? (
          <Skeleton height={12} />
        ) : (
          <RangeInput priceRange={priceRange} />
        )}
      </div>

      <div className="pt-6">
        <h2 className="mb-4 font-bold md:text-lg">Размеры</h2>
        {loadingSizes ? (
          <Skeleton
            count={5}
            width={45}
            height={45}
            inline
            borderRadius={10}
            className="mr-2 mb-2"
          />
        ) : (
          <SizeFilter filterSizes={filterSizes} />
        )}
      </div>
    </section>
  );
};

export default FilterSection;
