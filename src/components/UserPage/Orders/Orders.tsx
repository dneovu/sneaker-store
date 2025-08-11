import { useAppSelector } from '../../../hooks/redux';
import OrderItem from './OrderItem';

const Orders = () => {
  const { items, loading } = useAppSelector((state) => state.orders);

  if (loading) return;

  return (
    <div className="flex flex-col gap-3">
      {items.map((order, i) => (
        <OrderItem item={order} index={i} key={order.id} />
      ))}
    </div>
  );
};

export default Orders;
