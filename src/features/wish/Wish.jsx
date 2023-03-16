import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import WishList from '../../components/wish/WishList';
import Scroll from '../../components/widget/Scroll';

const Wish = () => {
  return (
    <>
      <Header />
      <WishList />
      <Footer />
      <Scroll />
    </>
  );
};

export default Wish;