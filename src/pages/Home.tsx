import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="text-3xl">Sneaker Store</h1>
      </header>
      <main>
        <section>
          <h2 className="text-2xl">Все кроссовки</h2>
          <div>
            <NavLink to={'/catalog/1'}>
              <article>
                <h3 className="text-lg font-bold">Nike Air Max</h3>
              </article>
            </NavLink>
            <NavLink to={'/catalog/2'}>
              <article>
                <h3 className="text-lg font-bold">Adidas Yeezy</h3>
              </article>
            </NavLink>
          </div>
        </section>
        <nav>
          <ul className="flex flex-col bg-red">
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Home;
