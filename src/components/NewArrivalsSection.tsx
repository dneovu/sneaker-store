import { NavLink } from 'react-router-dom';
import SneakerCard from './SneakerCard';
import NextArrow from '../assets/next.svg?react';

const ITEMS = [1, 2, 3, 4];

const NewArrivalsSection = () => {
  return (
    <section className="space-y-8">
      <h3 className="text-xl font-bold">All the new arrivals</h3>
      <div className="display mb-8 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] place-items-center gap-6">
        {ITEMS.map((id) => (
          <SneakerCard key={id} id={id} />
        ))}
      </div>
      <NavLink
        to="/catalog"
        className="ml-auto flex w-fit items-center justify-center text-sm font-medium underline-offset-1 hover:underline"
      >
        <span>View all new arrivals</span>
        <NextArrow className="ml-2 size-4" />
      </NavLink>
    </section>
  );
};

export default NewArrivalsSection;
