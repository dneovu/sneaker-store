import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <Routes>
      {['/', '/catalog'].map((path) => (
        <Route path={path} element={<Home />} />
      ))}
      <Route path="/catalog/:id" index element={<ItemPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
