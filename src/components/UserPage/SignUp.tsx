import { useAppDispatch } from '../../hooks/redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import AuthForm from './AuthForm';
import { setUser } from '../../store/userSlice';

const SignUp = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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

  return <AuthForm title="Sign up" handleClick={handleRegister} />;
};

export default SignUp;
