import { useAppDispatch } from '../../hooks/redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AuthForm from './AuthForm';
import { setUser } from '../../store/userSlice';

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: user.refreshToken,
          })
        );
      })
      .catch(console.log);
  };

  return <AuthForm title="Login" handleClick={handleLogin} />;
};

export default Login;
