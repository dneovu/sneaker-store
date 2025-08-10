import AuthForm from './AuthForm';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  return <AuthForm title="Login" handleClick={login} />;
};

export default Login;
