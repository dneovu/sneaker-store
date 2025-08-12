import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import PageWrapper from '../components/wrappers/PageWrapper';

const User = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <div className="flex gap-6 text-lg font-bold md:text-2xl">
          <NavLink
            to="/user/orders"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-100 ${
                isActive ? 'text-primary' : 'hover:text-primary text-black'
              }`
            }
          >
            Ваши заказы
          </NavLink>

          <NavLink
            to="/user/profile"
            className={({ isActive }) =>
              `cursor-pointer transition-all duration-100 ${
                isActive ? 'text-primary' : 'hover:text-primary text-black'
              }`
            }
          >
            Профиль
          </NavLink>
        </div>
        <div className="py-4 md:py-8">
          <Outlet />
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default User;
