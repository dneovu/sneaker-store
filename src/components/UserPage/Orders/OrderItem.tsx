import { OrderItem } from '../../../store/orderSlice';
import priceFormat from '../../../utils/priceFormat';

const OrderItemComponent = ({
  item,
  index,
}: {
  item: OrderItem;
  index: number;
}) => {
  return (
    <div className="flex flex-wrap gap-8 rounded-lg border border-gray-300 p-4 md:gap-12 xl:gap-24">
      <p className="w-24 font-medium">Заказ №{index + 1}</p>
      <div className="flex flex-col">
        <span className="text-secondary">Дата</span>
        <span className="font-medium">
          {new Date(item.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div className="flex w-24 flex-col">
        <span className="text-secondary">Сумма</span>
        <span className="font-medium">{priceFormat(item.total)}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-secondary">Состав</span>
        {item.items.map((orderSneakers) => (
          <span
            className="font-medium"
            key={orderSneakers.id + orderSneakers.model + orderSneakers.size}
          >
            {orderSneakers.brand} {orderSneakers.model} — {orderSneakers.size}×
            {orderSneakers.quantity}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OrderItemComponent;
