import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect } from 'react';
import { fetchSneakerById } from '../store/sneakersSlice';

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
    <div>
      <h1>
        Sneaker Name: {`${currentSneaker?.brand} ${currentSneaker?.model}`}
      </h1>
      <p>ID from URL: {id}</p>
    </div>
  );
};

export default ItemPage;
