import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect } from 'react';
import { fetchSneakerById } from '../store/sneakersSlice';
import PageWrapper from '../components/wrappers/PageWrapper';
import Header from '../components/common/Header';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import ItemSliderItem from '../components/ItemPage/ItemSlider/ItemSliderItem';
import ItemInfoSection from '../components/ItemPage/ItemInfoSection';

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
      <ContentWrapper>
        <div className="flex w-full">
          <div className="flex-2/3">
            <ItemSliderItem sneaker={currentSneaker} />
          </div>
          <div className="flex-1/3">
            <ItemInfoSection sneaker={currentSneaker} />
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ItemPage;
