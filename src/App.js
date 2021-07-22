import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import products from './products.json';
import Product from './components/Product'
import Cart from './components/Cart'
function App() {

  const [money, setMoney] = useState(1000);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  const resetCart = () => {
    setCart([])
  }

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0))
  }, [cart])

  return (
    <div>
      <Header money={money} total={total} />
      <div className="container products">
        {
          products.map(product => (
            <Product key={product.id} total={total} money={money} cart={cart} setCart={setCart} product={product} />
          ))
        }
      </div>

      <div className="cart">{total > 0 && (
        <Cart cart={cart} products={products} total={total} resetCart={resetCart} />
      )}</div>

    </div>
  );
}

export default App;
