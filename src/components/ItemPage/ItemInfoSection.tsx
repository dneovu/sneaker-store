import { useEffect, useState } from 'react';
import { Sneaker } from '../../types/sneaker';
import AddItemToCart from './AddItemToCart';
import ChooseSize from './ChooseSize';
import { SizesFilterState } from '../../store/catalogFilterSlice';

interface ItemInfoSectionProps {
  sneaker: Sneaker;
}

const ItemInfoSection = ({ sneaker }: ItemInfoSectionProps) => {
  const [choosenSizeId, setChoosenSizeId] = useState<null | string>(null);

  const [sizesToChoose, setSizesToChoose] = useState<SizesFilterState[]>(
    Object.entries(sneaker.sizes).map(([size, quantity]) => ({
      id: size,
      value: quantity,
      isSelected: false,
    }))
  );

  useEffect(() => {
    setSizesToChoose((prev) =>
      prev.map((size) => ({
        ...size,
        isSelected: size.id === choosenSizeId,
      }))
    );
  }, [choosenSizeId]);

  return (
    <section className="py-8 pl-16">
      <div className="space-y-4.5 border-b border-gray-300 pb-8">
        <h2 className="font-medium">Описание</h2>
        <p className="text-secondary text-justify">{sneaker.description}</p>
      </div>
      <div className="space-y-4.5 pt-8">
        <h2 className="font-medium">Выбор размера</h2>
        <ChooseSize sizes={sizesToChoose} setChoosenSizeId={setChoosenSizeId} />
      </div>
      <div className="mt-30">
        <AddItemToCart sizeId={choosenSizeId} sizes={sizesToChoose} />
      </div>
    </section>
  );
};

export default ItemInfoSection;
