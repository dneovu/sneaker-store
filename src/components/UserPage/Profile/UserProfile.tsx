import Skeleton from 'react-loading-skeleton';
import useAuth from '@/hooks/useAuth';
import AuthForm from './AuthForm';

const UserProfile = () => {
  const { isAuth, isAuthLoading, email, logout } = useAuth();

  if (isAuthLoading) return;

  if (!isAuth)
    return (
      <div>
        <AuthForm />
      </div>
    );

  return (
    <div>
      <div className="space-y-5 md:text-lg">
        <p>
          Вы вошли как{' '}
          <span className="font-medium">
            {email || <Skeleton className="flex-1" width={80} />}
          </span>
        </p>
        <button
          onClick={logout}
          className="hover:text-primary cursor-pointer font-semibold text-black transition-all duration-100"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
