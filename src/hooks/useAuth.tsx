import { useAppSelector } from './redux';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from '../store/userSlice';
import { useAppDispatch } from '../hooks/redux';

const useAuth = () => {
  const { id, email, token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    isAuth: !!email,
    id,
    email,
    token,
    logout,
  };
};

export default useAuth;
