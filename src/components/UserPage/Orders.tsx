import { useAppSelector } from '../../hooks/redux';

const Orders = () => {
  const { items, loading } = useAppSelector((state) => state.orders);

  if (loading) return;

  return (
    <div>
      {items.map((order, i) => (
        <div key={order.id} className="mb-10">
          <h1>Заказ №{i + 1}</h1>
          {order.items.map((orderSneakers) => (
            <p key={orderSneakers.id}>
              {orderSneakers.id} {orderSneakers.quantity} {orderSneakers.size}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Orders;
