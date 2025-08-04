import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ItemPage from './pages/ItemPage';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" index element={<ItemPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
