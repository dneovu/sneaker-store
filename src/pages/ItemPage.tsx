import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect } from 'react';
import { fetchSneakerById } from '../store/sneakersSlice';
import PageWrapper from '../components/wrappers/PageWrapper';
import Header from '../components/common/Header';
import ItemInfoSection from '../components/ItemPage/ItemInfoSection/ItemInfoSection';
import ItemSlider from '../components/ItemPage/ItemSlider';

const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { byId, loading, error } = useAppSelector((state) => state.sneakers);

  useEffect(() => {
    if (id && !byId[id]) {
      dispatch(fetchSneakerById(id));
    }
  }, [id, dispatch, byId]);

  if (loading) return;
  if (!id) return;
  if (!byId[id]) return error;

  return (
    <PageWrapper>
      <Header />
      <main className="lg:pr-8">
        <div className="flex w-full flex-wrap gap-8 lg:flex-nowrap lg:gap-16">
          <div className="flex-7/10">
            <ItemSlider sneaker={byId[id]} />
          </div>
          <div className="flex-3/10">
            <ItemInfoSection sneaker={byId[id]} />
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default ItemPage;
