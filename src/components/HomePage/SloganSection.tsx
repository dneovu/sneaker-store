import OriginalIcon from '@/assets/sloganSection/original.svg?react';
import BuyLatestIcon from '@/assets/sloganSection/buy-latest.svg?react';
import CurratedIcon from '@/assets/sloganSection/currated-unique.svg?react';

const SloganSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-46 flex max-w-96 flex-col items-center gap-4">
        <h1 className="text-center text-2xl font-bold md:text-4xl">
          Лучшая обувь для лучших мест.
        </h1>
        <p className="text-secondary">здесь вы найдете подходящую пару!</p>
      </div>

      <div className="grid w-full grid-cols-1 place-items-center text-2xl font-medium md:grid-cols-3 md:items-start md:gap-0">
        <div className="relative flex w-full flex-col items-center lg:mr-27">
          <CurratedIcon className="absolute -translate-y-39 md:-translate-x-10 lg:translate-x-30 lg:-translate-y-32" />
          <p>
            Тщательно <br /> отобранные
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center text-center md:mt-0">
          <OriginalIcon className="mb-3" />
          <p>100% Оригинальная обувь</p>
        </div>

        <div className="relative mt-34 flex flex-col items-center md:mt-0">
          <BuyLatestIcon className="absolute -translate-y-26 md:-translate-x-10 lg:translate-x-31 lg:-translate-y-15" />
          <p>
            Покупай новое <br /> и определяй тренды
          </p>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
