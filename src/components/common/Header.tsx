import { NavLink, useLocation } from 'react-router-dom';

import CartLogo from '../../assets/header/shopping-cart.svg?react';
import ProfileLogo from '../../assets/header/profile.svg?react';
import CompanyLogoLink from './CompanyLogoLink';

const Header = () => {
  const { pathname } = useLocation();

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
        <NavLink to="/cart" aria-label="Корзина">
          <CartLogo
            className={`fill-none transition-all duration-100 ${routeFlags.isCartPage ? 'stroke-primary' : 'hover:stroke-primary stroke-black'}`}
          />
        </NavLink>
        <NavLink to="/profile" aria-label="Профиль">
          <ProfileLogo
            className={`fill-none transition-all duration-100 ${routeFlags.isProfilePage ? 'stroke-primary' : 'hover:stroke-primary stroke-black'}`}
          />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
