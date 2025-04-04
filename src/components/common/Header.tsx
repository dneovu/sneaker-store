import { NavLink } from 'react-router-dom';

import CartLogo from '../../assets/header/shopping-cart.svg?react';
import FavsLogo from '../../assets/header/heart.svg?react';
import ProfileLogo from '../../assets/header/profile.svg?react';
import CompanyLogoLink from './CompanyLogoLink';

const Header = ({ isBorder = true }: { isBorder?: boolean }) => {
  return (
    <header
      className={`flex items-center justify-between ${isBorder ? 'border-b-1 border-gray-300' : ''} px-8 py-4 md:px-16 md:py-6 lg:px-32`}
    >
      <CompanyLogoLink />

      <div>
        <NavLink
          to="/catalog"
          className="hover:text-primary text-lg font-semibold transition-all duration-100"
        >
          Каталог
        </NavLink>
      </div>

      <nav className="flex items-center gap-8">
        <NavLink to="/cart" aria-label="Корзина">
          <CartLogo className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </NavLink>
        <NavLink to="/favorites" aria-label="Избранное">
          <FavsLogo className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </NavLink>
        <NavLink to="/profile" aria-label="Профиль">
          <ProfileLogo className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
