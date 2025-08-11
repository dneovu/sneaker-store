import { NavLink, useLocation } from 'react-router-dom';

import CartLogo from '../../assets/header/shopping-cart.svg?react';
import ProfileLogo from '../../assets/header/profile.svg?react';
import CompanyLogoLink from './CompanyLogoLink';
import { useAppSelector } from '../../hooks/redux';

const Header = () => {
  const { pathname } = useLocation();
  const cartNumber = useAppSelector((state) => state.cart.items.length);
  const orderNumber = useAppSelector((state) => state.orders.items.length);

  const routeFlags = {
    isCatalogPage: pathname === '/catalog',
    isCartPage: pathname === '/cart',
    isProfilePage: pathname === '/profile',
    isHomePage: pathname === '/',
  };

  return (
    <header
      className={`flex items-center justify-between ${!routeFlags.isHomePage ? 'border-b-1 border-gray-300' : ''} max-w-[1440px] px-8 py-4 md:py-6 lg:px-16`}
    >
      <CompanyLogoLink />
      <div>
        <NavLink
          to="/catalog"
          className={`hover:text-primary text-lg font-semibold transition-all duration-100 ${routeFlags.isCatalogPage ? 'text-primary' : ''}`}
        >
          Каталог
        </NavLink>
      </div>

      <nav className="flex items-center gap-8">
        <NavLink
          to="/cart"
          aria-label="Корзина"
          className={`relative transition-all duration-100 ${routeFlags.isCartPage ? 'text-primary stroke-primary' : 'hover:text-primary hover:stroke-primary stroke-black text-black'}`}
        >
          <CartLogo className="fill-none" />
          <span className="absolute bottom-3 left-7 font-bold">
            {cartNumber > 0 ? cartNumber : ''}
          </span>
        </NavLink>
        <NavLink
          to="/profile"
          aria-label="Профиль"
          className={`relative transition-all duration-100 ${routeFlags.isProfilePage ? 'text-primary stroke-primary' : 'hover:text-primary hover:stroke-primary stroke-black text-black'}`}
        >
          <ProfileLogo className="fill-none" />
          <span className="absolute bottom-3 left-6 font-bold">
            {orderNumber > 0 ? orderNumber : ''}
          </span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
