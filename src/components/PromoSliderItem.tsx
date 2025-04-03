import { Link } from 'react-router-dom';

const PromoSliderItem = ({ index }: { index: number }) => {
  return (
    <section className="flex justify-between">
      <div className="mr-8 flex w-3/7 flex-col pl-1">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="font-bask mb-7 text-5xl font-semibold xl:text-7xl">
            Puma {index}
            <br /> Running SX {index}
          </h2>
          <p className="text-secondary mb-6 xl:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste
            quibusdam, non ex nihil temporibusi?
          </p>
          <p className="mb-16 text-2xl font-bold">{index * 10000} ₽</p>
        </div>

        <Link
          to={`/catalog/${index}`}
          className="bg-primary w-fit cursor-pointer px-6 py-2.5 font-bold text-white transition-all hover:shadow-lg hover:brightness-110"
        >
          See more
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="mr-12 flex size-80 items-center justify-center rounded-full bg-gradient-to-br from-[#EFEEF5] to-[#F3E7E9] xl:mr-52 xl:size-[464px]">
          <img
            src={`/sneakers/sneaker-${index}.png`}
            alt={`Sneaker ${index}`}
            className="absolute w-[364px] -translate-x-9 select-none xl:h-[384px] xl:w-[568px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSliderItem;
