import OriginalIcon from '../assets/original.svg?react';
import BuyLatestIcon from '../assets/buy-latest.svg?react';
import CurratedIcon from '../assets/currated-unique.svg?react';

const SloganSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-46 flex max-w-96 flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold">
          Good sneakers take you good places
        </h1>
        <p className="text-secondary">
          look no further, this is where you find the best pair!
        </p>
      </div>

      <div className="grid w-full grid-cols-1 place-items-center text-2xl font-medium md:grid-cols-3 md:items-start md:gap-0">
        <div className="relative flex flex-col items-center">
          <CurratedIcon className="absolute translate-x-18 -translate-y-32" />
          <p>
            Curated <br /> & unique collection
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center text-center md:mt-0">
          <OriginalIcon className="mb-3" />
          <p>100% Original sneakers</p>
        </div>

        <div className="relative mt-34 flex flex-col items-center md:mt-0">
          <BuyLatestIcon className="absolute -translate-x-10 -translate-y-26 lg:translate-x-31 lg:-translate-y-15" />
          <p>
            Buy the latest <br /> & define the trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
