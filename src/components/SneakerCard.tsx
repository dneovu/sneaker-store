import { Link } from 'react-router-dom';
import { Sneaker } from '../types/sneaker';
import priceFormat from '../utils/priceFormat';

const SneakerCard = ({ item }: { item: Sneaker }) => {
  return (
    <article className="group cursor-pointer">
      <Link to={`/catalog/${item.id}`}>
        <div className="bg-background group-hover:border-background mb-2 flex size-39 items-center justify-center rounded-md border-4 border-white p-2 transition-all md:mb-6 md:size-78">
          <img
            src={item.imgSrc}
            alt={`${item.brand} ${item.model}`}
            className="select-none"
          />
        </div>
        <div className="space-y-2 px-2 font-medium">
          <p className="text-sm md:text-xl">
            {item.brand} {item.model}
          </p>
          <p className="text-secondary">{priceFormat(item.price)}</p>
        </div>
      </Link>
    </article>
  );
};

export default SneakerCard;
