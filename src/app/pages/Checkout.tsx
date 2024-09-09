"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from './../redux/cartSlice';
import EmptyState from './../components/EmptyState';
import CheckoutMobile from './../components/CheckoutMobile';
import CheckoutDesktop from './../components/CheckoutDesktop';
import Header from '../components/Header';

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartItems = Object.values(cart);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.movie.price * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  if (cartItems.length === 0) {
    return (
      <EmptyState
        message="Parece que não há nada por aqui :("
      />
    );
  }

  return (
    <>
      <div className='my-2'>
        <Header />
      </div>
      <div className="container mx-auto py-8 max-w-screen-lg">
        
        <div className="bg-white -mt-2 rounded-md p-4 mx-4 sm:hidden">
          <CheckoutMobile
            cartItems={cartItems}
            handleRemoveItem={handleRemoveItem}
            handleQuantityChange={handleQuantityChange}
            totalPrice={totalPrice}
          />
        </div>

        <div className="bg-white p-4 -mt-5 rounded-md hidden sm:block">
          <CheckoutDesktop
            cartItems={cartItems}
            handleRemoveItem={handleRemoveItem}
            handleQuantityChange={handleQuantityChange}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
