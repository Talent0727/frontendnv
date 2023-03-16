import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import HomeLocation from '../../components/views/HomeLocation';
import Scroll from '../../components/widget/Scroll';

const Location = () => {
  return (
    <>
      <Header />
      <HomeLocation />
      <Footer />
      <Scroll />
    </>
  );
};

export default Location;
