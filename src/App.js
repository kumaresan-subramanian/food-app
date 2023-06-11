import logo from './logo.svg';
import './App.css';
import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './store/CartProvider';
import { useState } from 'react';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onCartHandler={hideCartHandler}></Cart>}
      <Header onCartHandler={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
