import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cart';

export default function Nav() {
  const { cart, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className='flex justify-around items-center p-4 bg-gray-800 text-white'>
      <h1>React App</h1>
      <nav>
        <ul className='flex gap-5'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/pokie">Pokie</Link></li>
          <li><Link to="/Meals">Meals</Link></li>
        </ul>
      </nav>
      <button 
        className="bg-blue-500 px-4 py-2 rounded-md" 
        onClick={() => setShowCart(!showCart)}
      >
        Cart ({cart.length})
      </button>
      {showCart && (
        <div className="absolute top-16 right-4 bg-white text-black p-4 shadow-lg w-[40%] rounded-md">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id} className="flex justify-between border-b py-2">
                  <span>{item.title}</span>
                  <span>{item.quantity}x</span>
                  <button 
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}