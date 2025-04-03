import { useState } from 'react';
import PromoSliderItem from './PromoSliderItem';

import Adidas from '../assets/adidas.svg?react';
import Nike from '../assets/nike.svg?react';
import Vans from '../assets/vans.svg?react';
import NextArrow from '../assets/next.svg?react';
import { NavLink } from 'react-router-dom';

const ITEMS = [1, 2, 3, 4];

const PromoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {ITEMS.map((item, index) => (
            <div key={item} className="w-full flex-shrink-0">
              <PromoSliderItem index={index + 1} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-5">
        {ITEMS.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer rounded-lg border-4 border-white bg-white px-3 py-2 transition-all ${
              index === activeIndex
                ? 'bg-gradient-to-r from-[#F3E7E9] to-[#EFEEF5] shadow-lg'
                : 'text-black hover:shadow-lg'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={`/sneakers/sneaker-${index + 1}.png`}
              alt=""
              className="w-12 lg:w-16"
            />
          </button>
        ))}
      </div>

      <div className="invisible absolute flex w-fit max-w-1/2 translate-x-35 -translate-y-5 items-center gap-14 bg-white px-8 py-4 shadow-lg xl:visible">
        <div className="flex gap-8">
          <Adidas />
          <Nike />
          <Vans />
        </div>
        <div className="flex cursor-pointer gap-4 hover:underline hover:underline-offset-2">
          <NavLink to="/catalog" className="font-medium">
            Find that
            <br /> sneaker you want
          </NavLink>
          <NextArrow className="mt-auto" />
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
