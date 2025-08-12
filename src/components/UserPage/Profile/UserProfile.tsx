import useAuth from '../../../hooks/useAuth';
import AuthForm from './AuthForm';

const UserProfile = () => {
  const { isAuth, email, logout } = useAuth();

  return (
    <div>
      {isAuth ? (
        <div className="space-y-5 md:text-lg">
          <p>
            Вы вошли как <span className="font-medium">{email}</span>
          </p>
          <button
            onClick={logout}
            className="hover:text-primary cursor-pointer font-semibold text-black transition-all duration-100"
          >
            Выйти
          </button>
        </div>
      ) : (
        <div>
          <AuthForm />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
