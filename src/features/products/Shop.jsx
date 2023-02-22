import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import ShopMainPart from '../../components/filterPartials/ShopMainPart';
import Logo from '../../components/layout/Logo';

const Shop = () => {
  return (
    <>
      <Header />
      <ShopMainPart />
      <Logo />
      <Footer />
    </>
  );
};

export default Shop;