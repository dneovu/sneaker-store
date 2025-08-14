import { useAppSelector } from '../../../hooks/redux';
import useAuth from '../../../hooks/useAuth';
import OrderItem from './OrderItem';
import OrderItemSkeleton from './OrderItemSkeleton';

const Orders = () => {
  const { isAuth, isAuthLoading } = useAuth();
  const { items, loading, loaded } = useAppSelector((state) => state.orders);

  if (!isAuth && !isAuthLoading)
    return <p className="font-medium">Войдите, чтобы увидеть заказы</p>;

  if (loading && !loaded) {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <OrderItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!loading && loaded && items.length === 0) {
    return <p className="font-medium">У вас пока нет заказов</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((order, i) => (
        <OrderItem item={order} index={i} key={order.id} />
      ))}
    </div>
  );
};

export default Orders;
