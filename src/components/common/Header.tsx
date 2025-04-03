import { NavLink } from 'react-router-dom';
import CompanyLogo from '../../assets/logo.svg?react';
import CartLogo from '../../assets/shopping-cart.svg?react';
import FavsLogo from '../../assets/heart.svg?react';
import ProfileLogo from '../../assets/profile.svg?react';

const Header = ({ isBorder = true }: { isBorder?: boolean }) => {
  return (
    <header
      className={`flex items-center justify-between ${isBorder ? 'border-b-1 border-gray-300' : ''} px-8 py-4 md:px-16 md:py-8`}
    >
      <NavLink to="/" className="flex items-center gap-2">
        <CompanyLogo />
        <h1 className="text-3xl font-bold">SC.</h1>
      </NavLink>

      <div>
        <NavLink to="/catalog" className="text-lg font-semibold">
          Каталог
        </NavLink>
      </div>

      <nav className="flex items-center gap-8">
        <NavLink to="/cart" aria-label="Корзина">
          <CartLogo />
        </NavLink>
        <NavLink to="/favorites" aria-label="Избранное">
          <FavsLogo />
        </NavLink>
        <NavLink to="/profile" aria-label="Профиль">
          <ProfileLogo />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
