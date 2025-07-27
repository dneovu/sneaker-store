import { Link } from 'react-router-dom';
import { Sneaker } from '../../types/sneaker';
import priceFormat from '../../utils/priceFormat';

const PromoSliderItem = ({ item }: { item: Sneaker }) => {
  return (
    <section className="flex justify-between">
      <div className="mr-8 flex flex-col pt-6 pl-1 xl:w-4/7">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="font-bask mb-7 text-5xl font-semibold xl:text-7xl">
            {item.brand} {item.model}
          </h2>
          <p className="text-secondary mb-6 xl:text-xl">{item.description}</p>
          <p className="mb-16 text-2xl font-bold">{priceFormat(item.price)}</p>
        </div>

        <Link
          to={`/catalog/${item.id}`}
          className="bg-primary w-fit cursor-pointer px-6 py-2.5 font-bold text-white transition-all hover:shadow-lg hover:brightness-110"
        >
          К товару
        </Link>
      </div>

      <div className="flex w-full items-center justify-center">
        <div className="flex size-80 items-center justify-center rounded-full bg-gradient-to-br from-[#EFEEF5] to-[#F3E7E9] xl:size-[464px]">
          <img
            src={item.imgSrc}
            alt={`${item.brand} ${item.model}`}
            className="w-[364px] select-none xl:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSliderItem;
