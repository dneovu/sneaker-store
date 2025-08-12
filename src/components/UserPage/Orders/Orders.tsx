import { useAppSelector } from '../../../hooks/redux';
import useAuth from '../../../hooks/useAuth';
import OrderItem from './OrderItem';

const Orders = () => {
  const { isAuth } = useAuth();
  const { items, loading } = useAppSelector((state) => state.orders);

  if (loading) return;

  if (!isAuth)
    return <p className="font-medium">Войдите для просмотра заказов</p>;

  return items.length ? (
    <div className="flex flex-col gap-3">
      {items.map((order, i) => (
        <OrderItem item={order} index={i} key={order.id} />
      ))}
    </div>
  ) : (
    <p className="font-medium">У вас пока нет заказов</p>
  );
};

export default Orders;
