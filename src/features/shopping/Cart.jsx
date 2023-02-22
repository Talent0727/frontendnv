import React from 'react';
import CartItems from '../../components/shopping/CartItems';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Logo from '../../components/layout/Logo';

const Cart = () => {
  return (
    <>
      <Header />
      <CartItems />
      <Logo />
      <Footer />
    </>
  );
};

export default Cart;