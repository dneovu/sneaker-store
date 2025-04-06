import { NavLink } from 'react-router-dom';
import SneakerCard from './SneakerCard';
import NextArrow from '../assets/next.svg?react';
import { useAppSelector } from '../hooks/redux';

const NewArrivalsSection = () => {
  const { items } = useAppSelector((state) => state.sneakers);

  return (
    <section className="space-y-8">
      <h3 className="text-xl font-bold">Новые поступления</h3>
      <div className="display mb-8 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] place-items-center gap-6">
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
