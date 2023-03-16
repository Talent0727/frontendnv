import React from 'react';
import CartItems from '../../components/shopping/CartItems';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Scroll from '../../components/widget/Scroll';

const Cart = () => {
  return (
    <>
      <Header />
      <CartItems />
      <Footer />
      <Scroll />
    </>
  );
};

export default Cart;