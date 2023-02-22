import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import WishList from '../../components/wish/WishList';
import Logo from '../../components/layout/Logo';

const Wish = () => {
  return (
    <>
      <Header />
      <WishList />
      <Logo />
      <Footer />
    </>
  );
};

export default Wish;