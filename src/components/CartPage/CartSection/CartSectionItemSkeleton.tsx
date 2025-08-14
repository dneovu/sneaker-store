import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CartSectionItemSkeleton = () => {
  return (
    <div className="bg-background relative flex flex-col items-baseline justify-baseline gap-5 px-4 py-3 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-6">
      {/* Левая часть с изображением и инфо */}
      <div className="flex w-full justify-between gap-4 md:w-auto md:items-center md:justify-center md:gap-6">
        {/* Заглушка картинки */}
        <div className="size-fit rounded-lg border-4 border-white bg-white px-3 py-2">
          <Skeleton width={48} height={32} />
        </div>

        {/* Заглушка текста */}
        <div>
          <p className="text-right font-medium md:text-left">
            <Skeleton width={120} height={18} />
          </p>
          <p className="text-secondary text-right font-medium md:text-left">
            <Skeleton width={60} height={16} />
          </p>
          <p className="text-secondary text-right font-medium md:text-left">
            <Skeleton width={80} height={16} />
          </p>
        </div>
      </div>

      {/* Правая часть с количеством и суммой */}
      <div className="flex w-full items-center justify-between md:w-2/5">
        <Skeleton width={90} height={32} /> {/* Счётчик */}
        <p className="font-medium">
          <Skeleton width={60} height={20} />
        </p>
      </div>
    </div>
  );
};

export default CartSectionItemSkeleton;
