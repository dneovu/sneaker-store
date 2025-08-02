import { Sneaker } from '../../../types/sneaker';
import priceFormat from '../../../utils/priceFormat';

interface ItemSliderItemProps {
  sneaker: Sneaker;
}

const ItemSliderItem = ({ sneaker }: ItemSliderItemProps) => {
  return (
    <div className="bg-background px-16 py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{`${sneaker.brand} ${sneaker.model}`}</h1>
        <p className="text-secondary text-[1.125rem] font-medium">
          {priceFormat(sneaker.price)}
        </p>
      </div>
    </div>
  );
};

export default ItemSliderItem;
