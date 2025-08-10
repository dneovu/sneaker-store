import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ItemPage from './pages/ItemPage';
import Catalog from './pages/Catalog';
import CartSync from './components/CartSync';
import { useAppDispatch } from './hooks/redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { removeUser, setUser } from './store/userSlice';

function App() {
  const dispatch = useAppDispatch();

  // subscribe to keep user state after page reload
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <CartSync />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" index element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
