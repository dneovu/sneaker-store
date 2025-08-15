import { NavLink } from 'react-router-dom';
import SneakerCard from '@/components/common/SneakerCard';
import NextArrow from '@/assets/next.svg?react';
import { useAppSelector } from '@/hooks/redux';

const NewArrivalsSection = () => {
  const { items } = useAppSelector((state) => state.sneakers);

  return (
    <section className="space-y-8">
      <h3 className="text-xl font-bold">Новые поступления</h3>
      <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] justify-center justify-items-center gap-x-1 gap-y-4 md:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] md:gap-y-12">
        {items.map((sneaker) => (
          <SneakerCard key={sneaker.id} item={sneaker} />
        ))}
      </div>
      <NavLink
        to="/catalog"
        className="ml-auto flex w-fit items-center justify-center text-sm font-medium underline-offset-1 hover:underline"
      >
        <span>Увидеть больше</span>
        <NextArrow className="ml-2 size-4" />
      </NavLink>
    </section>
  );
};

export default NewArrivalsSection;
