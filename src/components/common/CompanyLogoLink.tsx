import { NavLink } from 'react-router-dom';
import CompanyLogo from '@/assets/common/logo.svg?react';

const CompanyLogoLink = () => {
  return (
    <NavLink to="/" className="flex items-center gap-2">
      <CompanyLogo />
      <h2 className="text-3xl font-bold">SC.</h2>
    </NavLink>
  );
};

export default CompanyLogoLink;
