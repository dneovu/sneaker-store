import { useState } from 'react';
import PromoSliderItem from './PromoSliderItem';

import Adidas from '../../assets/adidas.svg?react';
import Nike from '../../assets/nike.svg?react';
import Vans from '../../assets/vans.svg?react';
import NextArrow from '../../assets/next.svg?react';
import { NavLink } from 'react-router-dom';
import { Sneaker } from '../../types/sneaker';

const PromoSlider = ({ items }: { items: Sneaker[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const promoItems = items.filter((sneaker) => sneaker.promo);

  return (
    <div className="relative px-8 py-4 md:pr-16 md:pl-16 lg:pl-32">
      <div className="overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {promoItems.map((sneaker) => (
            <div key={sneaker.id} className="w-full flex-shrink-0">
              <PromoSliderItem item={sneaker} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-5">
        {promoItems.map((sneaker, index) => (
          <button
            key={sneaker.id}
            className={`cursor-pointer rounded-lg border-4 border-white bg-white px-3 py-2 transition-all ${
              index === activeIndex
                ? 'bg-gradient-to-r from-[#F3E7E9] to-[#EFEEF5] shadow-lg'
                : 'text-black hover:shadow-lg'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={sneaker.imgSrc}
              alt={`${sneaker.brand} ${sneaker.model}`}
              className="w-12 select-none xl:w-16"
            />
          </button>
        ))}
      </div>

      {/* блок над слайдером */}
      <div className="invisible absolute flex w-fit max-w-1/2 translate-x-35 -translate-y-5 items-center gap-14 bg-white px-8 py-4 shadow-lg xl:visible">
        <div className="flex gap-8">
          <Adidas />
          <Nike />
          <Vans />
        </div>
        <div className="flex cursor-pointer gap-4 hover:underline hover:underline-offset-2">
          <NavLink to="/catalog" className="font-medium">
            Найди то,
            <br /> что нужно
          </NavLink>
          <NextArrow className="mt-auto" />
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
