import { useAppSelector } from '@/hooks/redux';
import useAuth from '@/hooks/useAuth';
import OrderItem from './OrderItem';
import OrderItemSkeleton from './OrderItemSkeleton';
import { useMemo } from 'react';

const Orders = () => {
  const { isAuth, isAuthLoading } = useAuth();
  const { items, loading, loaded } = useAppSelector((state) => state.orders);

  const sortedOrdersByDate = useMemo(
    () =>
      [...items].sort(
        (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
      ),
    [items]
  );

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
      {sortedOrdersByDate.map((order, i) => (
        <OrderItem
          item={order}
          index={sortedOrdersByDate.length - 1 - i}
          key={order.id}
        />
      ))}
    </div>
  );
};

export default Orders;
