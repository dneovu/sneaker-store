import { useAppSelector, useAppDispatch } from './redux';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { setUser, removeUser, setIsAuthLoading } from '../store/userSlice';
import { setCart } from '../store/cartSlice';
import { clearOrders } from '../store/orderSlice';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/utils';

const useAuth = () => {
  const { id, email, isAuthLoading } = useAppSelector((state) => state.user);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
        })
      );

      const cartRef = doc(db, 'carts', user.uid);
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
        dispatch(setCart(cartSnap.data().items));
      } else {
        await setDoc(cartRef, { items: items });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      dispatch(setCart([]));
      dispatch(clearOrders());
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isAuth: !!email,
    isAuthLoading,
    id,
    email,
    logout,
    login,
    signup,
    setIsAuthLoading: (value: boolean) => dispatch(setIsAuthLoading(value)),
  };
};

export default useAuth;
