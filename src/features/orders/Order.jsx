import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import MyOrder from '../../components/orders/MyOrder';
import Logo from '../../components/layout/Logo';

const Order = () => {
  return (
    <>
      <Header />
      <MyOrder />
      <Logo />
      <Footer />
    </>
  );
};

export default Order;