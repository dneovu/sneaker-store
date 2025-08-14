import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OrderItemSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-8 rounded-lg border border-gray-300 p-4 md:gap-12 xl:gap-24">
      {/* Номер заказа */}
      <Skeleton width={80} height={20} />

      {/* Дата */}
      <div className="flex flex-col">
        <Skeleton width={40} height={14} />
        <Skeleton width={100} height={20} />
      </div>

      {/* Сумма */}
      <div className="flex w-24 flex-col">
        <Skeleton width={50} height={14} />
        <Skeleton width={70} height={20} />
      </div>

      {/* Состав */}
      <div className="flex min-w-[200px] flex-1 flex-col">
        <Skeleton width={50} height={14} />
        <Skeleton width="50%" height={18} count={2} />
      </div>
    </div>
  );
};

export default OrderItemSkeleton;
