import { useAppSelector } from './redux';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { removeUser, setUser } from '../store/userSlice';
import { useAppDispatch } from '../hooks/redux';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/utils';
import { setCart } from '../store/cartSlice';
import { clearOrders } from '../store/orderSlice';
import { useState } from 'react';

const useAuth = () => {
  const { id, email } = useAppSelector((state) => state.user);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const signup = async (email: string, password: string) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
          })
        );
      });
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

      // initial setup for firebase cart
      // get cart from firebase
      const cartRef = doc(db, 'carts', user.uid);
      const cartSnap = await getDoc(cartRef);

      if (cartSnap.exists()) {
        dispatch(setCart(cartSnap.data().items));
      } else {
        // if there is no cart - create array "items"
        await setDoc(cartRef, { items: items });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(setCart([]));
        dispatch(clearOrders());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    isAuth: !!email,
    isAuthLoading,
    setIsAuthLoading,
    id,
    email,
    logout,
    login,
    signup,
  };
};

export default useAuth;
