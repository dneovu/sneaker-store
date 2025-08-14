import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import User from './pages/User';
import ItemPage from './pages/ItemPage';
import Catalog from './pages/Catalog';
import CartSync from './components/CartSync';
import { useAppDispatch } from './hooks/redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { removeUser, setIsAuthLoading, setUser } from './store/userSlice';
import { fetchOrders } from './store/orderSlice';
import UserProfile from './components/UserPage/Profile/UserProfile';
import Orders from './components/UserPage/Orders/Orders';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  const dispatch = useAppDispatch();

  // subscribe to keep user state after page reload
  useEffect(() => {
    const auth = getAuth();
    let hasFetchedOrders = false;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ id: user.uid, email: user.email }));

        if (!hasFetchedOrders) {
          dispatch(fetchOrders(user.uid));
          hasFetchedOrders = true;
        }
      } else {
        dispatch(removeUser());
        hasFetchedOrders = false;
      }

      dispatch(setIsAuthLoading(false));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <SkeletonTheme baseColor="#999999" highlightColor="#888888">
      <CartSync />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" index element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </SkeletonTheme>
  );
}

export default App;
