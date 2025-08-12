import { Link } from 'react-router-dom';
import { Sneaker } from '../../../types/sneaker';
import priceFormat from '../../../utils/priceFormat';
import MainButton from '../../common/MainButton';

const PromoSliderItem = ({ item }: { item: Sneaker }) => {
  return (
    <section className="flex flex-wrap justify-between md:flex-nowrap">
      <div className="flex flex-col pt-6 pl-1 md:mr-8 xl:w-4/7">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="font-bask text-2xl font-semibold md:mb-7 md:text-3xl lg:text-7xl">
            {item.brand} {item.model}
          </h2>
          <p className="text-secondary mb-6 hidden lg:block lg:text-xl">
            {item.description}
          </p>
          <p className="mb-8 text-xl font-bold md:mb-16 md:text-2xl">
            {priceFormat(item.price)}
          </p>
        </div>

        <Link to={`/catalog/${item.id}`} className="hidden md:block">
          <MainButton text="К товару" />
        </Link>
      </div>

      <div className="flex w-full items-center justify-center">
        <Link to={`/catalog/${item.id}`}>
          <div className="flex size-40 items-center justify-center rounded-full bg-gradient-to-br from-[#EFEEF5] to-[#F3E7E9] md:size-80 xl:size-[464px]">
            <img
              src={item.imgSrc}
              alt={`${item.brand} ${item.model}`}
              className="w-[364px] select-none xl:w-[500px]"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PromoSliderItem;
