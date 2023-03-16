import React from 'react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import About from '../../components/views/About';
import Scroll from '../../components/widget/Scroll';

const AboutInfo = () => {
  return (
    <>
      <Header />
      <About />
      <Footer />
      <Scroll />
    </>
  );
};

export default AboutInfo;
