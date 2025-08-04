import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect } from 'react';
import { fetchSneakerById } from '../store/sneakersSlice';
import PageWrapper from '../components/wrappers/PageWrapper';
import Header from '../components/common/Header';
import ItemInfoSection from '../components/ItemPage/ItemInfoSection';
import ItemSlider from '../components/ItemPage/ItemSlider';

const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentSneaker, loading, error } = useAppSelector(
    (state) => state.sneakers
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchSneakerById(id));
    }
  }, [id, dispatch]);

  if (loading) return;
  if (!currentSneaker) return error;

  return (
    <PageWrapper>
      <Header />
      <main className="lg:pr-8">
        <div className="flex w-full flex-wrap gap-8 lg:flex-nowrap lg:gap-16">
          <div className="flex-7/10">
            <ItemSlider sneaker={currentSneaker} />
          </div>
          <div className="flex-3/10">
            <ItemInfoSection sneaker={currentSneaker} />
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default ItemPage;
