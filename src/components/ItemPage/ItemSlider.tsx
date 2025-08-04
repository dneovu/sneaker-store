import { useState } from 'react';
import { Sneaker } from '../../types/sneaker';
import priceFormat from '../../utils/priceFormat';
import Arrow from '../../../assets/itemarrow.svg?react';

const ItemSlider = ({ sneaker }: { sneaker: Sneaker }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [sneaker.imgSrc];

  if (sneaker.altImg) images.push(...sneaker.altImg);

  const handleArrowClick = (type: 'next' | 'prev') => {
    if (type === 'next')
      setActiveIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
    else
      setActiveIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-background relative flex flex-col items-center justify-center gap-10 px-8 py-8 lg:px-16 lg:py-20">
      <div className="flex w-full flex-col gap-2 justify-self-start lg:gap-6">
        <h1 className="text-2xl font-bold lg:text-4xl">{`${sneaker.brand} ${sneaker.model}`}</h1>
        <p className="text-secondary text-sm font-medium lg:text-[1.125rem]">
          {priceFormat(sneaker.price)}
        </p>
        {images.length > 1 ? (
          <div className="absolute top-100 hidden w-full justify-between pr-30 xl:flex">
            <button
              className="cursor-pointer"
              onClick={() => handleArrowClick('prev')}
            >
              <Arrow className="-scale-x-100" />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => handleArrowClick('next')}
            >
              <Arrow />
            </button>
          </div>
        ) : null}
      </div>

      {/* slider wrapper */}
      <div className="relative mt-6 max-w-[440px] overflow-hidden lg:max-w-[650px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `100%`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex w-full flex-shrink-0 items-center justify-center"
            >
              <img
                src={img}
                alt={`${sneaker.brand} ${sneaker.model}`}
                className="max-h-[400px] w-full max-w-[500px] object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* slider buttons */}
      <div className="flex justify-end space-x-5">
        {images.map((img, index) => (
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
              src={img}
              alt={`${sneaker.brand} ${sneaker.model}`}
              className="w-16 select-none"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemSlider;
