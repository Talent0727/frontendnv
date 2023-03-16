import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import MyOrder from '../../components/orders/MyOrder';
import Scroll from '../../components/widget/Scroll';

const Order = () => {
  return (
    <>
      <Header />
      <MyOrder />
      <Footer />
      <Scroll />
    </>
  );
};

export default Order;