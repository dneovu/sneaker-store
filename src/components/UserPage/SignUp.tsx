import AuthForm from './AuthForm';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const { signup } = useAuth();

  return <AuthForm title="Sign up" handleClick={signup} />;
};

export default SignUp;
