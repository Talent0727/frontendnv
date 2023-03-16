import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import ShopMainPart from '../../components/filterPartials/ShopMainPart';
import Scroll from '../../components/widget/Scroll';

const Shop = () => {
  return (
    <>
      <Header />
      <ShopMainPart />
      <Footer />
      <Scroll />
    </>
  );
};

export default Shop;