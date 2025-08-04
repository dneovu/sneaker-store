import { NavLink } from 'react-router-dom';

import CartLogo from '../../assets/header/shopping-cart.svg?react';
import ProfileLogo from '../../assets/header/profile.svg?react';
import CompanyLogoLink from './CompanyLogoLink';

interface HeaderProps {
  isBorder?: boolean;
  isCatalogPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isBorder = true, isCatalogPage }) => {
  return (
    <header
      className={`flex items-center justify-between ${isBorder ? 'border-b-1 border-gray-300' : ''} max-w-[1440px] px-8 py-4 md:py-6 lg:px-16`}
    >
      <CompanyLogoLink />

      <div>
        <NavLink
          to="/catalog"
          className={`hover:text-primary text-lg font-semibold transition-all duration-100 ${isCatalogPage ? 'text-primary' : ''}`}
        >
          Каталог
        </NavLink>
      </div>

      <nav className="flex items-center gap-8">
        <NavLink to="/cart" aria-label="Корзина">
          <CartLogo className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </NavLink>
        <NavLink to="/profile" aria-label="Профиль">
          <ProfileLogo className="hover:stroke-primary fill-none stroke-black transition-all duration-100" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
